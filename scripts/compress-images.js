import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAX_SIZE = 1024 * 1024; // 1MB in bytes
const PUBLIC_DIR = path.join(__dirname, '../public');
const MEHENDHI_DIR = path.join(__dirname, '../mehandhi');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    console.error(`Error getting file size for ${filePath}:`, error.message);
    return 0;
  }
}

/**
 * Compress an image using sharp
 */
async function compressImage(inputPath, outputPath) {
  try {
    // Get file extension
    const ext = path.extname(inputPath).toLowerCase();
    
    // Compress based on format
    let sharpInstance = sharp(inputPath);
    
    // Get metadata first to check size
    const metadata = await sharp(inputPath).metadata();
    const originalSize = getFileSize(inputPath);
    
    // Adjust quality based on original size - more aggressive for larger images
    let quality = 85;
    if (originalSize > 10 * 1024 * 1024) { // > 10MB
      quality = 75;
    } else if (originalSize > 5 * 1024 * 1024) { // > 5MB
      quality = 80;
    }
    
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({ quality: quality, compressionLevel: 9 });
    } else {
      // For JPEG/JPG
      sharpInstance = sharpInstance.jpeg({ 
        quality: quality,
        mozjpeg: true 
      });
    }
    
    // Resize if image is very large (max width 2000px, maintain aspect ratio)
    if (metadata.width > 2000) {
      sharpInstance = sharpInstance.resize(2000, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await sharpInstance.toFile(outputPath);
    
    let newSize = getFileSize(outputPath);
    
    // If still over 1MB, try more aggressive compression
    if (newSize > MAX_SIZE) {
      const ext = path.extname(inputPath).toLowerCase();
      let aggressiveInstance = sharp(inputPath);
      
      if (ext === '.png') {
        aggressiveInstance = aggressiveInstance.png({ quality: 70, compressionLevel: 9 });
      } else {
        aggressiveInstance = aggressiveInstance.jpeg({ quality: 70, mozjpeg: true });
      }
      
      // More aggressive resize
      const metadata = await sharp(inputPath).metadata();
      if (metadata.width > 1800) {
        aggressiveInstance = aggressiveInstance.resize(1800, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }
      
      await aggressiveInstance.toFile(outputPath);
      newSize = getFileSize(outputPath);
    }
    
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✓ Compressed: ${path.basename(inputPath)}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB → New: ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    return { success: true, originalSize, newSize };
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Process a single directory
 */
async function processDirectory(dirPath, relativePath = '') {
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        const subDirResults = await processDirectory(filePath, path.join(relativePath, file));
        processed += subDirResults.processed;
        skipped += subDirResults.skipped;
        errors += subDirResults.errors;
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        
        if (IMAGE_EXTENSIONS.includes(ext)) {
          const fileSize = stat.size;
          
          if (fileSize > MAX_SIZE) {
            // Create output path (same directory, overwrite original)
            const outputPath = filePath;
            const tempPath = filePath + '.tmp';
            
            // Compress to temp file first
            const result = await compressImage(filePath, tempPath);
            
            if (result.success) {
              // Replace original with compressed version
              fs.renameSync(tempPath, outputPath);
              processed++;
            } else {
              // Remove temp file if compression failed
              if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
              }
              errors++;
            }
          } else {
            skipped++;
            console.log(`⊘ Skipped (already < 1MB): ${file} (${(fileSize / 1024 / 1024).toFixed(2)}MB)`);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
    errors++;
  }
  
  return { processed, skipped, errors };
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image compression...\n');
  console.log(`Target: Images larger than ${(MAX_SIZE / 1024 / 1024).toFixed(0)}MB\n`);
  
  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  
  // Process public directory
  if (fs.existsSync(PUBLIC_DIR)) {
    console.log(`📁 Processing: ${PUBLIC_DIR}`);
    const results = await processDirectory(PUBLIC_DIR, 'public');
    totalProcessed += results.processed;
    totalSkipped += results.skipped;
    totalErrors += results.errors;
    console.log('');
  }
  
  // Process mehandhi directory
  if (fs.existsSync(MEHENDHI_DIR)) {
    console.log(`📁 Processing: ${MEHENDHI_DIR}`);
    const results = await processDirectory(MEHENDHI_DIR, 'mehandhi');
    totalProcessed += results.processed;
    totalSkipped += results.skipped;
    totalErrors += results.errors;
    console.log('');
  }
  
  // Summary
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 Compression Summary:');
  console.log(`   ✓ Processed: ${totalProcessed} images`);
  console.log(`   ⊘ Skipped: ${totalSkipped} images (already < 1MB)`);
  console.log(`   ✗ Errors: ${totalErrors} images`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  if (totalErrors > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

