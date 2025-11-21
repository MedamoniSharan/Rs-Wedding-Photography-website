import type { HeroSlide, Photo, Service, TeamMember, Branch, YouTubeVideo, Testimonial, FAQ } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  { id: 1, src: '/IMG_3061.JPG', alt: 'Beautiful wedding moment captured' },
  { id: 2, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.47%20%281%29.jpeg', alt: 'Wedding photography moment' },
  { id: 3, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.47.jpeg', alt: 'Wedding photography moment' },
  { id: 4, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.48%20%281%29.jpeg', alt: 'Wedding photography moment' },
  { id: 5, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.48%20%282%29.jpeg', alt: 'Wedding photography moment' },
  { id: 6, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.48.jpeg', alt: 'Wedding photography moment' },
  { id: 7, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.49%20%281%29.jpeg', alt: 'Wedding photography moment' },
  { id: 8, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.49%20%282%29.jpeg', alt: 'Wedding photography moment' },
  { id: 9, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.49%20%283%29.jpeg', alt: 'Wedding photography moment' },
  { id: 10, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.49.jpeg', alt: 'Wedding photography moment' },
  { id: 11, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.50%20%281%29.jpeg', alt: 'Wedding photography moment' },
  { id: 12, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.50%20%282%29.jpeg', alt: 'Wedding photography moment' },
  { id: 13, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.50.jpeg', alt: 'Wedding photography moment' },
  { id: 14, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.51%20%281%29.jpeg', alt: 'Wedding photography moment' },
  { id: 15, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.51%20%282%29.jpeg', alt: 'Wedding photography moment' },
  { id: 16, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.51%20%283%29.jpeg', alt: 'Wedding photography moment' },
  { id: 17, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.51.jpeg', alt: 'Wedding photography moment' },
  { id: 18, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.56.jpeg', alt: 'Wedding photography moment' },
  { id: 19, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.57%20%281%29.jpeg', alt: 'Wedding photography moment' },
  { id: 20, src: '/header/WhatsApp%20Image%202025-11-06%20at%2000.09.57.jpeg', alt: 'Wedding photography moment' },
];

export const GALLERY_PHOTOS: Photo[] = [
  // Wedding Photos
  { id: 1, src: '/IMG_1117.JPG', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 2, src: '/img_1760.jpg', alt: 'Wedding ceremony', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 3, src: '/img_2597.jpg', alt: 'Bride and groom portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 4, src: '/img_2598.jpg', alt: 'Elegant bridal moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 5, src: '/img_2604.jpg', alt: 'Wedding reception moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Reception' },
  { id: 6, src: '/img_2620.jpg', alt: 'Ceremony highlights', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 7, src: '/img_2623.jpg', alt: 'Couple during golden hour', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 8, src: '/img_2625.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 9, src: '/img_2626.jpg', alt: 'Family and friends', category: 'Wedding', location: 'Hyderabad', shootType: 'Family' },
  { id: 10, src: '/img_2953.jpg', alt: 'Detail shot', category: 'Wedding', location: 'Hyderabad', shootType: 'Details' },
  { id: 11, src: '/img_2954.jpg', alt: 'Wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 12, src: '/IMG_3061.JPG', alt: 'Wedding celebration moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 13, src: '/img_3425.jpg', alt: 'Romantic couple portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 14, src: '/img_3427.jpg', alt: 'Elegant wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 15, src: '/img_3428.jpg', alt: 'Wedding ceremony', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 16, src: '/img_3429.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 17, src: '/IMG_3431.JPG', alt: 'Romantic couple portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 18, src: '/img_3434.jpg', alt: 'Wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 19, src: '/img_3665.jpg', alt: 'Wedding ceremony', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 20, src: '/img_4389.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 21, src: '/img_4464.jpg', alt: 'Bride and groom portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 22, src: '/img_5098.jpg', alt: 'Elegant bridal moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 23, src: '/img_5901.jpg', alt: 'Wedding reception moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Reception' },
  { id: 24, src: '/img_5902.jpg', alt: 'Ceremony highlights', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 25, src: '/img_5904.jpg', alt: 'Couple during golden hour', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 26, src: '/img_5905.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 27, src: '/img_5907.jpg', alt: 'Family and friends', category: 'Wedding', location: 'Hyderabad', shootType: 'Family' },
  { id: 28, src: '/IMG_5908.JPG', alt: 'Elegant wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 29, src: '/img_6805.jpg', alt: 'Detail shot', category: 'Wedding', location: 'Hyderabad', shootType: 'Details' },
  { id: 30, src: '/img_6806.jpg', alt: 'Wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 31, src: '/img_7149.jpg', alt: 'Wedding ceremony', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 32, src: '/img_7152.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 33, src: '/img_7153.jpg', alt: 'Bride and groom portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 34, src: '/img_7154.jpg', alt: 'Elegant bridal moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 35, src: '/img_7155.jpg', alt: 'Wedding reception moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Reception' },
  { id: 36, src: '/img_7589.jpg', alt: 'Ceremony highlights', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 37, src: '/img_7636.jpg', alt: 'Couple during golden hour', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 38, src: '/img_7639.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 39, src: '/img_7640.jpg', alt: 'Family and friends', category: 'Wedding', location: 'Hyderabad', shootType: 'Family' },
  { id: 40, src: '/img_7862.jpg', alt: 'Detail shot', category: 'Wedding', location: 'Hyderabad', shootType: 'Details' },
  { id: 41, src: '/img_8016.jpg', alt: 'Wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 42, src: '/img_8017.jpg', alt: 'Wedding ceremony', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 43, src: '/img_8134.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 44, src: '/img_8135.jpg', alt: 'Bride and groom portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 45, src: '/img_8136.jpg', alt: 'Elegant bridal moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 46, src: '/img_8137.jpg', alt: 'Wedding reception moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Reception' },
  { id: 47, src: '/9001a35c-4486-4854-9bf4-8e836fbb1c66.jpg', alt: 'Wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  
  // Pre-Wedding Photos
  { id: 85, src: '/0i2a6343.jpg', alt: 'Pre-wedding couple portrait', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 86, src: '/0i2a6368.jpg', alt: 'Romantic pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 87, src: '/0i2a6592.jpg', alt: 'Pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 88, src: '/0i2a6596.jpg', alt: 'Pre-wedding couple session', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 89, src: '/0i2a6876.jpg', alt: 'Elegant pre-wedding shot', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 90, src: '/0i2a7636.jpg', alt: 'Pre-wedding memories', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 91, src: '/0i2a7746 copy.jpg', alt: 'Pre-wedding celebration', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 92, src: '/4835c39a-fb51-44c1-81dd-2ba1fc94ec64.jpg', alt: 'Pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 93, src: '/66ee6e40-33e8-41bb-9c12-d9d7189f69f8.jpg', alt: 'Pre-wedding couple moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 94, src: '/e23ceee0-b275-465d-a249-381120f3f88d.jpg', alt: 'Romantic pre-wedding session', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 95, src: '/img_2776.jpg', alt: 'Pre-wedding portrait', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 96, src: '/img_2790.jpg', alt: 'Pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 97, src: '/img_2794.jpg', alt: 'Pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 98, src: '/img_3048.jpg', alt: 'Pre-wedding couple portrait', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 99, src: '/img_3581.jpg', alt: 'Elegant pre-wedding shot', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 100, src: '/img_3587.jpg', alt: 'Pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 101, src: '/img_3590.jpg', alt: 'Pre-wedding memories', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 102, src: '/img_3754.jpg', alt: 'Pre-wedding couple session', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 103, src: '/img_4097.jpg', alt: 'Romantic pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 104, src: '/img_7556.jpg', alt: 'Pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 105, src: '/img_7557.jpg', alt: 'Pre-wedding celebration', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  
  // Celebrate Photos
  { id: 20, src: '/02377817-F29F-4B1B-B0E6-DFEC4D44DF9B.jpg', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 21, src: '/0BEB5C88-A889-49C8-8C1F-7BD9F9562682.jpg', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 22, src: '/482A1607-5AC2-415A-9F70-148ECAA35E3C.jpg', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 23, src: '/4C5C35AA-9037-4E77-A80C-FF53C8ACFE71.jpg', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 24, src: '/55888B26-40C0-4CA8-B803-42263D0CE76B.jpg', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 25, src: '/64078515-2E5B-46A0-8596-50DD23915610.jpg', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 26, src: '/65AA0718-7005-4A8D-BDAA-B9888ABAB6A1.jpg', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 27, src: '/6EC1F929-8ACA-4F2B-8F54-E994DE7D1378.jpg', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 28, src: '/7476BB13-83D5-4373-85DB-C89CF8F55BBD.jpg', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 29, src: '/97D76C00-49C0-4F21-8177-C49BD16C9481.jpg', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 30, src: '/A563F658-5DDD-4428-ADC0-43AB2CBF6E1B.jpg', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 31, src: '/C80ADDD6-089C-43F5-9E6F-3146CA763534.jpg', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 32, src: '/EEED92E7-65B9-49E0-93F1-01B243C79D7B.jpg', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 33, src: '/F783AF91-B00D-4DF2-B28C-AEFE32E17B77.jpg', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 34, src: '/IMG_1110.JPG', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 35, src: '/IMG_1111.JPG', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 36, src: '/IMG_1112.JPG', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 37, src: '/IMG_1113.JPG', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 38, src: '/IMG_1114.JPG', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 39, src: '/IMG_1115.JPG', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 40, src: '/IMG_1116.JPG', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 41, src: '/IMG_1117.JPG', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 42, src: '/IMG_4854.JPG', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 43, src: '/IMG_9878.JPG', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 44, src: '/IMG_9879.JPG', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 45, src: '/IMG_9880.JPG', alt: 'Celebration photography', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 46, src: '/IMG_9881.JPG', alt: 'Celebration highlights', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 47, src: '/IMG_9882.JPG', alt: 'Celebration moment', category: 'Celebrate', location: 'Hyderabad', shootType: 'Celebration' },
  
  // Half Saree Photos
  { id: 48, src: '/00b87dac-63f4-4e99-b783-0d8f5669953d.jpg', alt: 'Half saree ceremony', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 49, src: '/070199a0-ff7f-4947-9033-4ffaaf648c64.jpg', alt: 'Half saree photography', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 50, src: '/0bf63c81-aef2-4fec-a3bd-055387d7e051.jpg', alt: 'Half saree highlights', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 51, src: '/1e3792b3-e12b-4a2b-82a6-8433166c4032.jpg', alt: 'Half saree moment', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 52, src: '/23021988-06b3-4204-9516-55298763cc86.jpg', alt: 'Half saree ceremony', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 53, src: '/24f8ba36-135d-4f61-bd8d-7eb333160ead.jpg', alt: 'Half saree photography', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 54, src: '/271e21fd-6f60-40cd-9416-adefc3ece625.jpg', alt: 'Half saree highlights', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 55, src: '/2d785e38-7c00-49ed-a4c5-e65025dbe6b6.jpg', alt: 'Half saree moment', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 56, src: '/44a9f020-47bd-47a0-9590-6844733b5b0d.jpg', alt: 'Half saree ceremony', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 57, src: '/4996bb15-b248-4410-a1dc-597bae443ba2.jpg', alt: 'Half saree photography', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 58, src: '/52ba1afa-eea9-4121-9ec7-5083dc2149f3.jpg', alt: 'Half saree highlights', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 59, src: '/6f45d9e6-95e3-4629-b702-595732e3b675.jpg', alt: 'Half saree moment', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 60, src: '/b69aaacf-9a1a-4c0c-bcf7-59b379ee862e.jpg', alt: 'Half saree ceremony', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 61, src: '/b6c23224-7ef1-4b70-8932-4da46a417e85.jpg', alt: 'Half saree photography', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 62, src: '/b910b10f-b0d2-43c7-bf7c-9afa3d15a757.jpg', alt: 'Half saree highlights', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 63, src: '/c1059d75-4f33-4988-8b72-17c05191aed8.jpg', alt: 'Half saree moment', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 64, src: '/c6e27989-a600-4234-9a23-60e61dbc0379.jpg', alt: 'Half saree ceremony', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 65, src: '/f35845bf-633a-46db-ac2a-2fe2cc536a03.jpg', alt: 'Half saree photography', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 66, src: '/IMG_5061.JPG', alt: 'Half saree highlights', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 67, src: '/IMG_7417.JPG', alt: 'Half saree moment', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 68, src: '/IMG_7420.JPG', alt: 'Half saree ceremony', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 69, src: '/IMG_7421.JPG', alt: 'Half saree photography', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 70, src: '/IMG_7422.JPG', alt: 'Half saree highlights', category: 'Half Saree', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 71, src: '/IMG_8019.JPG', alt: 'Half saree moment', category: 'Half Saree', location: 'Hyderabad', shootType: 'Portrait' },
  
  // Haldi Photos
  { id: 72, src: '/IMG_0482.JPG', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 73, src: '/IMG_0485.JPG', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 74, src: '/IMG_0486.JPG', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 75, src: '/IMG_0487.JPG', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 76, src: '/IMG_0488.JPG', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 77, src: '/img_0489.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 78, src: '/img_0491.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 79, src: '/img_0493.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 80, src: '/img_1214.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 81, src: '/img_1215.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 124, src: '/img_2003.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 125, src: '/img_2008.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 126, src: '/img_2009.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 127, src: '/IMG_2014.JPG', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 128, src: '/IMG_2016.JPG', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 129, src: '/img_2017.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 130, src: '/img_2018.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 131, src: '/img_2021.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 132, src: '/img_2644.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 133, src: '/img_2647.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 134, src: '/img_2648.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 135, src: '/img_2649.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 136, src: '/img_2947.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 137, src: '/img_2948.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 138, src: '/img_2949.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 139, src: '/img_6583.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 140, src: '/img_6584.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 141, src: '/img_6769.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 142, src: '/img_6770.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 143, src: '/img_6808.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 144, src: '/img_6809.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 145, src: '/img_7012.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 146, src: '/img_7013.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 147, src: '/b14fc2d1-02ec-4f5b-917f-7d079a7ea7f5.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 148, src: '/c80e8b10-90f2-44e4-9487-8c920f9a1359.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 149, src: '/e859eba3-3a41-401b-8938-e04a859f3977.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  
  // Candid Photos
  { id: 82, src: '/0j5a9030-.jpg', alt: 'Candid wedding moment', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 83, src: '/62e61066-8be8-4ba6-924c-15af5dfe0007.jpg', alt: 'Candid portrait', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 84, src: '/64078515-2E5B-46A0-8596-50DD23915610.jpg', alt: 'Candid wedding day memories', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 106, src: '/9001a35c-4486-4854-9bf4-8e836fbb1c66.jpg', alt: 'Candid photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 107, src: '/EEED92E7-65B9-49E0-93F1-01B243C79D7B.jpg', alt: 'Candid moment', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 108, src: '/IMG_1115.JPG', alt: 'Candid wedding photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 109, src: '/img_2604.jpg', alt: 'Candid portrait session', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 110, src: '/img_3426.jpg', alt: 'Candid wedding day', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 111, src: '/img_3432.jpg', alt: 'Candid photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 112, src: '/img_3433.jpg', alt: 'Candid moment', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 113, src: '/img_3435.jpg', alt: 'Candid wedding photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 114, src: '/img_5905.jpg', alt: 'Candid portrait', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 115, src: '/img_5907.jpg', alt: 'Candid wedding day', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 117, src: '/img_6765.jpg', alt: 'Candid moment', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 118, src: '/img_7862.jpg', alt: 'Candid wedding photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 120, src: '/IMG_9113.JPG', alt: 'Candid wedding photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 121, src: '/img_9114.jpg', alt: 'Candid photography', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  
  // Mehendi Photos
  { id: 150, src: '/mehendi/elegant-indian-bride-adorning-herself-with-jewelry.jpg', alt: 'Mehendi ceremony - elegant bride', category: 'Mehendi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 151, src: '/mehendi/indian-bride-portrait.jpg', alt: 'Mehendi photography - bride portrait', category: 'Mehendi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 152, src: '/mehendi/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament.jpg', alt: 'Mehendi henna designs on hands', category: 'Mehendi', location: 'Hyderabad', shootType: 'Details' },
  { id: 153, src: '/mehendi/indian-woman-showing-her-painted-hands-with-henna-decoration.jpg', alt: 'Beautiful mehendi henna patterns', category: 'Mehendi', location: 'Hyderabad', shootType: 'Details' },
  { id: 154, src: '/mehendi/mehndi-wedding-ornament-hands-drawn-by-henna.jpg', alt: 'Mehendi ceremony highlights', category: 'Mehendi', location: 'Hyderabad', shootType: 'Ceremony' },
];

export const SHOWCASE_IMAGES: string[] = [
  '/IMG_1117.JPG',
  '/img_1760.jpg',
  '/img_2597.jpg',
  '/img_2598.jpg',
  '/img_2604.jpg',
  '/img_2620.jpg',
  '/img_2623.jpg',
  '/img_2625.jpg',
  '/img_2953.jpg',
  '/img_2954.jpg',
  '/IMG_3061.JPG',
  '/img_3425.jpg',
  '/img_3427.jpg',
  '/img_3428.jpg',
  '/img_3429.jpg',
  '/IMG_3431.JPG',
  '/img_3434.jpg',
  '/img_3665.jpg',
  '/img_4389.jpg',
  '/img_4464.jpg',
  '/img_5098.jpg',
  '/img_5901.jpg',
  '/img_5902.jpg',
  '/img_5904.jpg',
  '/img_5905.jpg',
  '/img_5907.jpg',
  '/IMG_5908.JPG',
  '/img_6805.jpg',
  '/img_6806.jpg',
  '/img_7149.jpg',
  '/img_7152.jpg',
  '/img_7153.jpg',
  '/img_7154.jpg',
  '/img_7155.jpg',
  '/img_7589.jpg',
  '/img_7636.jpg',
  '/img_7639.jpg',
  '/img_7640.jpg',
  '/img_7862.jpg',
  '/img_8016.jpg',
  '/img_8017.jpg',
  '/img_8134.jpg',
  '/img_8135.jpg',
  '/img_8136.jpg',
  '/img_8137.jpg',
  '/0i2a6343.jpg',
  '/0i2a6368.jpg',
  '/0i2a6592.jpg',
  '/0i2a6596.jpg',
  '/img_2776.jpg',
  '/img_3048.jpg',
  '/img_3754.jpg',
  // repeat to enrich the grid
  '/img_2953.jpg',
  '/img_2954.jpg',
  '/img_3425.jpg',
  '/img_3427.jpg',
  '/img_3428.jpg',
  '/img_3429.jpg',
  '/img_3434.jpg',
  '/img_3665.jpg',
  '/img_4389.jpg',
  '/img_4464.jpg',
  '/img_5098.jpg',
  '/img_5901.jpg',
  '/img_5902.jpg',
  '/img_5904.jpg',
  '/img_6805.jpg',
  '/img_6806.jpg',
  '/img_7149.jpg',
  '/img_7152.jpg',
  '/img_7153.jpg',
  '/img_7154.jpg',
  '/img_7155.jpg',
  '/img_7589.jpg',
  '/img_7636.jpg',
  '/img_7639.jpg',
  '/img_7640.jpg',
  '/img_8016.jpg',
  '/img_8017.jpg',
  '/img_8134.jpg',
  '/img_8135.jpg',
  '/img_8136.jpg',
  '/img_8137.jpg',
  '/0i2a6876.jpg',
  '/0i2a7636.jpg',
  '/img_3581.jpg',
  '/img_3587.jpg',
  '/img_4097.jpg',
  '/img_7556.jpg',
  '/img_7557.jpg',
];

export const CAROUSEL_IMAGES: HeroSlide[] = [
  { id: 1, src: '/img_2597.jpg', alt: 'Wedding portrait' },
  { id: 2, src: '/img_2598.jpg', alt: 'Elegant bridal portrait' },
  { id: 3, src: '/img_2623.jpg', alt: 'Reception portrait' },
  { id: 4, src: '/img_2625.jpg', alt: 'Celebration portrait' },
  { id: 5, src: '/img_2626.jpg', alt: 'Family portrait' },
  { id: 6, src: '/img_2953.jpg', alt: 'Wedding photography portrait' },
  { id: 7, src: '/img_2954.jpg', alt: 'Wedding portrait session' },
  { id: 8, src: '/IMG_3061.JPG', alt: 'Wedding celebration portrait' },
  { id: 9, src: '/IMG_3431.JPG', alt: 'Romantic couple portrait' },
  { id: 10, src: '/img_3434.jpg', alt: 'Wedding day portrait' },
  { id: 11, src: '/IMG_5908.JPG', alt: 'Elegant wedding portrait' },
  { id: 12, src: '/img_5901.jpg', alt: 'Special moment portrait' },
  { id: 13, src: '/0i2a6343.jpg', alt: 'Pre-wedding couple portrait' },
  { id: 14, src: '/0i2a6368.jpg', alt: 'Romantic pre-wedding session' },
  { id: 15, src: '/0i2a6592.jpg', alt: 'Pre-wedding photography portrait' },
  { id: 16, src: '/0i2a6596.jpg', alt: 'Pre-wedding couple session portrait' },
  { id: 17, src: '/img_2776.jpg', alt: 'Elegant pre-wedding portrait' },
  { id: 18, src: '/img_3048.jpg', alt: 'Pre-wedding memories portrait' },
  { id: 19, src: '/img_3754.jpg', alt: 'Beautiful pre-wedding portrait' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    description: "With over 30 years of experience, Ranga Surya Photography is one of the most trusted names in wedding photography across Andhra Pradesh, Telangana, and all over India. We specialize in transforming every emotion, ritual, and moment into timeless art. Our candid wedding photoshoots beautifully capture the laughter, tears, and love that define your big day. From traditional ceremonies to creative couple photoshoots, our experienced team ensures perfection in every frame.",
    imageSrc: '/img_2597.jpg',
  },
  {
    id: 'pre-wedding-photography',
    title: 'Pre-Wedding Photography',
    description: "Celebrate your journey together with a magical pre-wedding photoshoot by Ranga Surya Photography. Having completed over 180+ pre-wedding shoots across India, including picturesque locations in Munnar, Kerala, and the best spots in Andhra Pradesh and Telangana, our team knows how to turn your love story into art. We blend creativity with emotion to make every pre-wedding photoshoot truly memorable.",
    imageSrc: '/0i2a6343.jpg',
  },
  {
    id: 'candid-photography',
    title: 'Candid Photography',
    description: "Candid photography is all about capturing moments as they happen — unposed, genuine, and full of life. At Ranga Surya Photography, we specialize in candid photography that tells your story naturally. From the joy of weddings to the laughter of pre-wedding shoots, our team ensures every photo reflects your emotions authentically. With a perfect mix of artistic angles, natural lighting, and expert timing, we create images that you'll treasure for a lifetime.",
    imageSrc: '/img_3426.jpg',
  },
  {
    id: 'half-saree-photography',
    title: 'Half Saree Photography',
    description: "A Half Saree ceremony is a beautiful tradition that marks a young girl's graceful journey into womanhood. At Ranga Surya Photography, we capture this emotional milestone with elegance and creativity. Our photographers specialize in both traditional portraits and candid photoshoots, making sure every smile, ritual, and emotion is preserved with authenticity.",
    imageSrc: '/070199a0-ff7f-4947-9033-4ffaaf648c64.jpg',
  },
  {
    id: 'haldi-photography',
    title: 'Haldi Photography',
    description: "The Haldi ceremony is one of the happiest and most colorful wedding rituals. Our team at Ranga Surya Photography captures these vibrant moments through stunning Haldi photography, filled with laughter, love, and emotion. As experts in candid photoshoots and wedding photography, we focus on capturing spontaneous joy and the beauty of real emotions.",
    imageSrc: '/IMG_0482.JPG',
  },
  {
    id: 'event-photography',
    title: 'Event Photography',
    description: "At Ranga Surya Photography, we cover all kinds of events with passion and professionalism — from corporate gatherings and birthday parties to baby showers, housewarming ceremonies, and family celebrations. With over three decades of experience, our team ensures every emotion and detail is captured perfectly. We also offer celebrity photography services for public figures, artists, and influencers with high-end portraits and event coverage.",
    imageSrc: '/events/WhatsApp Image 2025-11-21 at 19.53.04.jpeg',
  },
  {
    id: 'celebrate-photography',
    title: 'Celebrate Photography',
    description: "Capture the joy and vibrancy of your celebrations with our creative photography. We specialize in documenting festive moments, parties, and special occasions with artistic vision and attention to detail. Every celebration deserves to be remembered beautifully.",
    imageSrc: '/02377817-F29F-4B1B-B0E6-DFEC4D44DF9B.jpg',
  },
  {
    id: 'mehendi-photography',
    title: 'Mehendi Photography',
    description: "The Mehendi ceremony is a beautiful pre-wedding ritual filled with intricate designs, vibrant colors, and joyful celebrations. At Ranga Surya Photography, we specialize in capturing the artistry of henna designs, the emotions of the ceremony, and the candid moments of laughter and bonding. Our Mehendi photography beautifully documents this traditional celebration with a perfect blend of artistic portraits and candid shots.",
    imageSrc: '/mehendi/elegant-indian-bride-adorning-herself-with-jewelry.jpg',
  },
];


export const TEAM_DATA: TeamMember[] = [
  { 
    name: 'Ranga Surya (Chinnababu Garu)', 
    role: 'Founder & CEO', 
    description: 'With over 30 years of experience in photography, Mr. Chinnababu Garu (Ranga Surya) is a renowned professional known for his excellence in traditional photography. As the Vice President of the Photography Association, West Godavari District, he continues to inspire creativity and uphold the art of timeless photography.',
    imageSrc: '/ranga_surya.jpeg' 
  },
  { 
    name: 'Mr. Jagath Krishna', 
    role: 'Managing Director', 
    description: 'Managing Director of Ranga Surya Photography, operations and ensures every project meets the brand\'s creative and professional standards.',
    imageSrc: '/jagath_krishna.png' 
  },
  { 
    name: 'Mr. Manikanta Kumar', 
    role: 'Professional Candid Photographer & CEO of Baby Clicks Studio', 
    description: 'Mr. Manikanta Kumar is a professional candid photographer and CEO of Baby Clicks Studio.',
    imageSrc: '/Mr_manikanta.png' 
  },
  { 
    name: 'Prem Kumar', 
    role: 'Traditional Photographer', 
    description: 'Prem Kumar is a skilled traditional photographer specializing in capturing classic wedding moments with timeless elegance and attention to detail.',
    imageSrc: '/traditional_photographer.jpg' 
  },
  { 
    name: 'K. Mahesh', 
    role: 'Cinematographer', 
    description: 'K. Mahesh is a talented cinematographer known for his creative visuals and storytelling through the lens.',
    imageSrc: '/mahesh.png' 
  },
  { 
    name: 'Ajay Kumar', 
    role: 'Cinematographer & Teaser Maker', 
    description: 'Ajay Kumar is a creative cinematographer and teaser maker known for his dynamic visuals and modern storytelling style.',
    imageSrc: '/Ajay_kumar.png' 
  },
  { 
    name: 'Deepak Kumar', 
    role: 'Professional Video Editor & Traditional Videographer', 
    description: 'Deepak Kumar is a skilled video editor and traditional videographer known for crafting visually engaging stories with precision and creativity.',
    imageSrc: '/deepak.png' 
  },
  { 
    name: 'Baji', 
    role: 'Album Designer & Photographer', 
    description: 'Baji is a talented album designer and photographer known for his creative layouts and eye for visual storytelling.',
    imageSrc: '/baji.png' 
  },
  { 
    name: 'Jay Raju', 
    role: 'Traditional & Album Designer', 
    description: 'Jay Raju is a skilled traditional photographer and album designer, combining classic photography techniques with modern album design to create timeless wedding memories.',
    imageSrc: '/Jay_raju.jpg' 
  },
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  { 
    id: '1', 
    url: 'https://youtu.be/PwYww2lJruc?si=e0s7mZHpHJql-LfN',
    title: 'Vennala & Karthik Wedding Trailer'
  },
  { 
    id: '2', 
    url: 'https://youtu.be/oBxBoFLXuYo?si=2ud4FCkjynX1m9Ya',
    title: 'Vennala & Karthik Wedding Video'
  },
  { 
    id: '3', 
    url: 'https://youtu.be/wnpfmgr5crM?si=xiUvs8L5inL17Ce6',
    title: 'VegiReddy Wedding Haldi Celebration'
  },
  { 
    id: '5', 
    url: 'https://youtu.be/rLfpoqMQk6I?si=Bj-oXLZRGBG7KpCV',
    title: 'Uday & Meghana Wedding Highlights'
  },
  { 
    id: '6', 
    url: 'https://youtu.be/qkMR7FAu9x8?si=v71Ipb_5VHNhuxtB',
    title: 'Pujitha & Vinay Pre-Wedding Shoot'
  },
  { 
    id: '7', 
    url: 'https://youtu.be/MQQ-KP6Ga1s?si=0gufwfRMAsNxUeTp',
    title: 'Krishna & Kreethi Pre-Wedding Song'
  },
  { 
    id: '8', 
    url: 'https://youtu.be/HjK_4YKyOzY?si=Rg5k8klfxBop1YbB',
    title: 'Sri & Ravali Pre-Wedding Shoot'
  },
  { 
    id: '9', 
    url: 'https://youtu.be/h_Z6smgUfBo?si=l2IrI9wFCiZ-cHYI',
    title: 'Surya Reddy & Poojitha Pre-Wedding Song'
  },
  { 
    id: '10', 
    url: 'https://youtu.be/-FJ0EmRwcPU?si=9OZ31NIO_0SgLhsE',
    title: 'Lasya Sree - Half Saree Function Cinematic Photography'
  },
];

export const BRANCHES_DATA: Branch[] = [
  {
    name: 'Hyderabad Branch',
    specialty: 'Best Wedding Photography | Pre-wedding photoshoots | All Event Photographers',
    address: 'Executive Towers, Mansa, Near Miyapur new police bhel, Kondapur, Telangana 500084',
    phone: '+91 70369 29247',
    email: 'hyderabad@rangasurya.in',
    mapLink: 'https://www.google.com/maps/place/Hyderabad+Best+Wedding+photography+%7C+Pre-wedding+photoshoots+%7C+All+Event+Photographers+-+Ranga+surya+photography/@17.4627596,78.3502543,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93ff06f8a2ad:0xbab020163fbd5dac!8m2!3d17.4627596!4d78.3502543!16s%2Fg%2F11jpm0l7zv?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Vijayawada Branch',
    specialty: 'Best Wedding Photographers | Pre-wedding cinematographer',
    address: 'GP74+FHQ, Near, 100 Feet Rd, beside alankar sweets & bakery, signal, Enikepadu, Vijayawada, Andhra Pradesh 521108',
    phone: '+91 99598 90543',
    email: 'vijayawada@rangasurya.in',
    mapLink: 'https://maps.app.goo.gl/riDLp4YJwxA5x2NN7?g_st=ipc'
  },
  {
    name: 'Vizag Branch',
    specialty: 'Wedding Photography & Cinematography',
    address: '50-49-43/C, TPT Colony, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013',
    phone: '+91 91336 64556',
    email: 'vizag@rangasurya.in',
    mapLink: 'https://maps.app.goo.gl/QWWACUf3WEMXoPEM7?g_st=ipc'
  },
  {
    name: 'Rajahmundry Branch',
    specialty: 'Best Wedding Photographers | Pre-wedding shoots',
    address: 'D.no : 9, 10-5, Subhash chandra bose street, opp. chandra bhanu line, Navabharat Nagar, Rajamahendravaram, Andhra Pradesh 533101',
    phone: '+91 91336 64556',
    email: 'rajahmundry@rangasurya.in',
    mapLink: 'https://maps.app.goo.gl/i6rjcQ34Hj8sKWUV8?g_st=ipc'
  },
  {
    name: 'Bhimavaram Branch',
    specialty: 'Wedding Photographers | Pre Wedding shoot | Birthday shoots',
    address: 'Nataraj Theater, Near, Jp road, opposite Hailland shoemart, Balusumoodi, Bhimavaram, Andhra Pradesh 534202',
    phone: '+91 94403 28796',
    email: 'bhimavaram@rangasurya.in',
    mapLink: 'https://maps.app.goo.gl/1Q6Vk9MAgp4tvKcLA?g_st=ipc'
  }
];

export const CLIENT_REVIEWS: Testimonial[] = [
  {
    id: 'review-1',
    url: 'https://youtube.com/shorts/a-qHxj8WprI?si=xypNzZ5ePnd4b2tw',
    title: 'Client Review - Wedding Photography',
    clientName: 'Happy Client'
  },
  {
    id: 'review-2',
    url: 'https://youtube.com/shorts/uFw_ApLxrBw?si=6KRG1qIH93hqV9VH',
    title: 'Client Review - Pre-Wedding Photography',
    clientName: 'Happy Client'
  },
];

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should we book our wedding photography?',
    answer: 'We recommend booking at least 3-6 months in advance to ensure availability for your special date. Popular wedding seasons may require earlier bookings. Contact us to check availability and secure your date.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide photography services outside Hyderabad?',
    answer: 'Yes! We provide wedding photography services across Andhra Pradesh, Telangana, and all over India. We have branches in Hyderabad, Vijayawada, Vizag, Rajahmundry, and Bhimavaram. We also travel to destination weddings.'
  },
  {
    id: 'faq-3',
    question: 'What is included in your wedding photography package?',
    answer: 'Our packages typically include professional photography coverage, edited high-resolution images, online gallery access, and delivery within the agreed timeframe. Specific inclusions vary by package - please contact us for detailed package information.'
  },
  {
    id: 'faq-4',
    question: 'How long does it take to receive the edited photos?',
    answer: 'We typically deliver edited wedding photos within 4-6 weeks after your event. For pre-wedding shoots, delivery is usually 2-3 weeks. Rush delivery options may be available upon request.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer drone photography services?',
    answer: 'Yes, we provide drone photography and cinematography services for weddings and events. Our certified drone operators capture stunning aerial shots that add a unique perspective to your wedding story.'
  },
  {
    id: 'faq-6',
    question: 'Can we customize our photography package?',
    answer: 'Absolutely! We work with you to create a customized package that fits your needs, budget, and style preferences. Whether you need additional coverage hours, extra photographers, or specific services, we can tailor a package for you.'
  },
  {
    id: 'faq-7',
    question: 'What style of photography do you specialize in?',
    answer: 'We specialize in both traditional and candid photography styles. Our approach blends artistic vision with authentic moments, capturing both posed portraits and spontaneous emotions to tell your complete wedding story.'
  },
  {
    id: 'faq-8',
    question: 'Do you provide both photography and videography services?',
    answer: 'Yes, we offer both professional photography and cinematography services. Our team includes skilled photographers and videographers who work together to capture your special day from multiple angles.'
  }
];