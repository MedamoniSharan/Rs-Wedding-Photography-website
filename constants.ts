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
  { id: 1, src: '/RS_P7491.jpg', alt: 'Bride and groom portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 2, src: '/RS_P8283.jpg', alt: 'Elegant bridal moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 3, src: '/RS_P8309.jpg', alt: 'Ceremony highlights', category: 'Wedding', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 4, src: '/RS_P8492.jpg', alt: 'Couple during golden hour', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 5, src: '/RS_P8513.jpg', alt: 'Wedding reception moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Reception' },
  { id: 6, src: '/RS_P8610.jpg', alt: 'Family and friends', category: 'Wedding', location: 'Hyderabad', shootType: 'Family' },
  { id: 7, src: '/RS_P82834.jpg', alt: 'Detail shot', category: 'Wedding', location: 'Hyderabad', shootType: 'Details' },
  { id: 8, src: '/RS_P8572.jpg', alt: 'Wedding celebration', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 9, src: '/IMG_3061.JPG', alt: 'Wedding celebration moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 10, src: '/IMG_3431.JPG', alt: 'Romantic couple portrait', category: 'Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 11, src: '/IMG_5908.JPG', alt: 'Elegant wedding photography', category: 'Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 12, src: '/IMG_9113.JPG', alt: 'Special wedding moment', category: 'Wedding', location: 'Hyderabad', shootType: 'Details' },
  
  // Pre-Wedding Photos
  { id: 13, src: '/0I2A6395.jpg', alt: 'Romantic pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 14, src: '/0I2A6648.jpg', alt: 'Pre-wedding couple portrait', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 15, src: '/IMG_0283.JPG', alt: 'Pre-wedding shot', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 16, src: '/IMG_2786.JPG', alt: 'Pre-wedding celebration', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 17, src: '/IMG_3588.JPG', alt: 'Elegant pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 18, src: '/IMG_3589.JPG', alt: 'Pre-wedding memories', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 19, src: '/IMG_3595.JPG', alt: 'Beautiful pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  
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
  { id: 72, src: '/259fd242-7274-4663-9da9-8b062a000ec9.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 73, src: '/52ff6597-98a2-4db0-b294-f5b5d9f8ebb2.jpg', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 74, src: '/62e61066-8be8-4ba6-924c-15af5dfe0007.jpg', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 75, src: '/660ed3ea-6d8c-4221-995a-ee626ecd6455.jpg', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 76, src: '/9de2bf60-56dd-4552-9ed3-34462dab9b30.jpg', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 77, src: '/IMG_0482.JPG', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 78, src: '/IMG_0485.JPG', alt: 'Haldi highlights', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 79, src: '/IMG_0486.JPG', alt: 'Haldi moment', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 80, src: '/IMG_0487.JPG', alt: 'Haldi ceremony', category: 'Haldi', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 81, src: '/IMG_0488.JPG', alt: 'Haldi photography', category: 'Haldi', location: 'Hyderabad', shootType: 'Portrait' },
  
  // Candid Photos
  { id: 82, src: '/IMG_2014.JPG', alt: 'Candid wedding moment', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 83, src: '/IMG_2016.JPG', alt: 'Candid portrait', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
  { id: 84, src: '/IMG_3434.JPG', alt: 'Candid wedding day memories', category: 'Candid', location: 'Hyderabad', shootType: 'Candid' },
];

export const SHOWCASE_IMAGES: string[] = [
  '/RS_P7491.jpg',
  '/RS_P8283.jpg',
  '/RS_P8309.jpg',
  '/RS_P8492.jpg',
  '/RS_P8513.jpg',
  '/RS_P8572.jpg',
  '/RS_P8610.jpg',
  '/RS_P82834.jpg',
  '/PHOTO-2024-05-19-19-47-16.jpg',
  '/IMG_2014.JPG',
  '/IMG_2016.JPG',
  '/IMG_3061.JPG',
  '/IMG_3431.JPG',
  '/IMG_3434.JPG',
  '/IMG_5908.JPG',
  '/IMG_9113.JPG',
  '/0I2A6395.jpg',
  '/0I2A6648.jpg',
  '/IMG_0283.JPG',
  '/IMG_2786.JPG',
  '/IMG_3588.JPG',
  '/IMG_3589.JPG',
  '/IMG_3595.JPG',
  // repeat to enrich the grid
  '/RS_P7491.jpg',
  '/RS_P8283.jpg',
  '/RS_P8309.jpg',
  '/RS_P8492.jpg',
  '/RS_P8513.jpg',
  '/RS_P8572.jpg',
  '/RS_P8610.jpg',
  '/RS_P82834.jpg',
  '/IMG_2014.JPG',
  '/IMG_2016.JPG',
  '/IMG_3061.JPG',
  '/IMG_3431.JPG',
  '/IMG_3434.JPG',
  '/IMG_5908.JPG',
  '/IMG_9113.JPG',
  '/0I2A6395.jpg',
  '/0I2A6648.jpg',
  '/IMG_0283.JPG',
  '/IMG_2786.JPG',
  '/IMG_3588.JPG',
  '/IMG_3589.JPG',
  '/IMG_3595.JPG',
];

export const CAROUSEL_IMAGES: HeroSlide[] = [
  { id: 1, src: '/RS_P7491.jpg', alt: 'Portrait near ceremony venue' },
  { id: 2, src: '/RS_P8283.jpg', alt: 'Elegant bridal portrait' },
  { id: 3, src: '/RS_P8513.jpg', alt: 'Reception portrait' },
  { id: 4, src: '/RS_P8572.jpg', alt: 'Celebration portrait' },
  { id: 5, src: '/RS_P8610.jpg', alt: 'Family portrait' },
  { id: 6, src: '/IMG_2014.JPG', alt: 'Wedding ceremony portrait' },
  { id: 7, src: '/IMG_2016.JPG', alt: 'Bridal portrait session' },
  { id: 8, src: '/IMG_3061.JPG', alt: 'Wedding celebration portrait' },
  { id: 9, src: '/IMG_3431.JPG', alt: 'Romantic couple portrait' },
  { id: 10, src: '/IMG_3434.JPG', alt: 'Wedding day portrait' },
  { id: 11, src: '/IMG_5908.JPG', alt: 'Elegant wedding portrait' },
  { id: 12, src: '/IMG_9113.JPG', alt: 'Special moment portrait' },
  { id: 13, src: '/0I2A6395.jpg', alt: 'Pre-wedding couple portrait' },
  { id: 14, src: '/0I2A6648.jpg', alt: 'Romantic pre-wedding session' },
  { id: 15, src: '/IMG_0283.JPG', alt: 'Candid pre-wedding portrait' },
  { id: 16, src: '/IMG_2786.JPG', alt: 'Pre-wedding celebration portrait' },
  { id: 17, src: '/IMG_3588.JPG', alt: 'Elegant pre-wedding portrait' },
  { id: 18, src: '/IMG_3589.JPG', alt: 'Pre-wedding memories portrait' },
  { id: 19, src: '/IMG_3595.JPG', alt: 'Beautiful pre-wedding portrait' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    description: "With over 30 years of experience, we specialize in transforming every emotion, smile, and ritual into timeless memories. Our team focuses on capturing every moment with authenticity and elegance across Andhra Pradesh, Telangana, and all over India.",
    imageSrc: '/RS_P8492.jpg',
  },
  {
    id: 'pre-wedding-photography',
    title: 'Pre-Wedding Photography',
    description: "With over 180+ pre-wedding shoots completed across India, our team creates cinematic love stories at the most stunning locations. From serene tea gardens of Munnar, Kerala to romantic landscapes across Andhra Pradesh and Telangana.",
    imageSrc: '/IMG_2016.JPG',
  },
  {
    id: 'candid-photography',
    title: 'Candid Photography',
    description: "Capture authentic moments with our candid photography services. We specialize in documenting real emotions, spontaneous interactions, and genuine expressions that tell your story naturally.",
    imageSrc: '/RS_P8572.jpg',
  },
  {
    id: 'half-saree-photography',
    title: 'Half Saree Photography',
    description: "Celebrate traditional ceremonies with artistic flair. We specialize in capturing the rich cultural heritage of Andhra Pradesh weddings, from the vibrant half-saree ceremony to the sacred dothi function.",
    imageSrc: '/IMG_2014.JPG',
  },
  {
    id: 'haldi-photography',
    title: 'Haldi Photography',
    description: "The Haldi ceremony is one of the most heartfelt and joyful parts of every Indian wedding. Our experienced photographers specialize in Haldi photography, turning every splash of color and candid smile into a timeless memory with creative storytelling and technical precision.",
    imageSrc: '/259fd242-7274-4663-9da9-8b062a000ec9.jpg',
  },
  {
    id: 'event-photography',
    title: 'Event Photography',
    description: "We specialize in event photography that beautifully captures emotions, energy, and memories. We cover corporate events, housewarming ceremonies, baby showers, birthday celebrations, and family functions with professionalism and creativity.",
    imageSrc: '/RS_P8513.jpg',
  },
  {
    id: 'celebrate-photography',
    title: 'Celebrate Photography',
    description: "Capture the joy and vibrancy of your celebrations with our creative photography. We specialize in documenting festive moments, parties, and special occasions with artistic vision and attention to detail.",
    imageSrc: '/02377817-F29F-4B1B-B0E6-DFEC4D44DF9B.jpg',
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
    name: 'Ajay Kumar', 
    role: 'Cinematographer & Teaser Maker', 
    description: 'Ajay Kumar is a creative cinematographer and teaser maker known for his dynamic visuals and modern storytelling style.',
    imageSrc: '/Ajay_kumar.png' 
  },
  { 
    name: 'K. Mahesh', 
    role: 'Cinematographer', 
    description: 'K. Mahesh is a talented cinematographer known for his creative visuals and storytelling through the lens.',
    imageSrc: '/mahesh.png' 
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
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  { 
    id: '1', 
    url: 'https://youtu.be/PwYww2lJruc?si=e0s7mZHpHJql-LfN',
    title: 'Wedding Photography Video 1'
  },
  { 
    id: '2', 
    url: 'https://youtu.be/oBxBoFLXuYo?si=2ud4FCkjynX1m9Ya',
    title: 'Wedding Photography Video 2'
  },
  { 
    id: '3', 
    url: 'https://youtu.be/wnpfmgr5crM?si=xiUvs8L5inL17Ce6',
    title: 'Wedding Photography Video 3'
  },
  { 
    id: '5', 
    url: 'https://youtu.be/rLfpoqMQk6I?si=Bj-oXLZRGBG7KpCV',
    title: 'Wedding Photography Video 5'
  },
  { 
    id: '6', 
    url: 'https://youtu.be/qkMR7FAu9x8?si=v71Ipb_5VHNhuxtB',
    title: 'Wedding Photography Video 6'
  },
  { 
    id: '7', 
    url: 'https://youtu.be/MQQ-KP6Ga1s?si=0gufwfRMAsNxUeTp',
    title: 'Wedding Photography Video 7'
  },
  { 
    id: '8', 
    url: 'https://youtu.be/HjK_4YKyOzY?si=Rg5k8klfxBop1YbB',
    title: 'Wedding Photography Video 8'
  },
  { 
    id: '9', 
    url: 'https://youtu.be/h_Z6smgUfBo?si=l2IrI9wFCiZ-cHYI',
    title: 'Wedding Photography Video 9'
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
    phone: '+91 94403 28796',
    email: 'vizag@rangasurya.in',
    mapLink: 'https://maps.app.goo.gl/QWWACUf3WEMXoPEM7?g_st=ipc'
  },
  {
    name: 'Rajahmundry Branch',
    specialty: 'Best Wedding Photographers | Pre-wedding shoots',
    address: 'D.no : 9, 10-5, Subhash chandra bose street, opp. chandra bhanu line, Navabharat Nagar, Rajamahendravaram, Andhra Pradesh 533101',
    phone: '+91 99593 93593',
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