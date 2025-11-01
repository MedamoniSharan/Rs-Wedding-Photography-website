import type { HeroSlide, Photo, Service, TeamMember, Branch, YouTubeVideo } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  { id: 1, src: '/IMG_3061.jpg', alt: 'Beautiful wedding moment captured' },
  { id: 2, src: '/RS_P8283.jpg', alt: 'Romantic wedding photography' },
  { id: 3, src: '/RS_P8309.jpg', alt: 'Wedding ceremony capture' },
  { id: 4, src: '/RS_P8492.jpg', alt: 'Elegant wedding portrait' },
  { id: 5, src: '/RS_P8513.jpg', alt: 'Wedding celebration moment' },
  { id: 6, src: '/RS_P8572.jpg', alt: 'Special wedding memory' },
  { id: 7, src: '/RS_P8610.jpg', alt: 'Wedding day photography' },
  { id: 8, src: '/RS_P82834.jpg', alt: 'Candid wedding shot' },
  { id: 9, src: '/IMG_2014.JPG', alt: 'Wedding ceremony highlights' },
  { id: 10, src: '/IMG_2016.JPG', alt: 'Bridal portrait session' },
  { id: 11, src: '/IMG_3061.JPG', alt: 'Wedding celebration moment' },
  { id: 12, src: '/IMG_3431.JPG', alt: 'Romantic couple portrait' },
  { id: 13, src: '/IMG_3434.JPG', alt: 'Wedding day memories' },
  { id: 14, src: '/IMG_9113.JPG', alt: 'Special wedding moment' },
  { id: 15, src: '/0I2A6395.jpg', alt: 'Romantic pre-wedding moment' },
  { id: 16, src: '/0I2A6648.jpg', alt: 'Pre-wedding couple portrait' },
  { id: 17, src: '/IMG_0283.JPG', alt: 'Candid pre-wedding shot' },
  { id: 18, src: '/IMG_2786.JPG', alt: 'Pre-wedding celebration' },
  { id: 19, src: '/IMG_3588.JPG', alt: 'Elegant pre-wedding photography' },
  { id: 20, src: '/IMG_3589.JPG', alt: 'Pre-wedding memories' },
  { id: 21, src: '/IMG_3595.JPG', alt: 'Beautiful pre-wedding moment' },
];

export const GALLERY_PHOTOS: Photo[] = [
  { id: 1, src: '/RS_P7491.jpg', alt: 'Bride and groom portrait', category: 'Weddings', location: 'Hyderabad', shootType: 'Candid' },
  { id: 2, src: '/RS_P8283.jpg', alt: 'Elegant bridal moment', category: 'Weddings', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 3, src: '/RS_P8309.jpg', alt: 'Ceremony highlights', category: 'Weddings', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 4, src: '/RS_P8492.jpg', alt: 'Couple during golden hour', category: 'Weddings', location: 'Hyderabad', shootType: 'Couple' },
  { id: 5, src: '/RS_P8513.jpg', alt: 'Candid reception moment', category: 'Weddings', location: 'Hyderabad', shootType: 'Reception' },
  { id: 6, src: '/RS_P8572.jpg', alt: 'Joyful celebration', category: 'Weddings', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 7, src: '/RS_P8610.jpg', alt: 'Family and friends', category: 'Weddings', location: 'Hyderabad', shootType: 'Family' },
  { id: 8, src: '/RS_P82834.jpg', alt: 'Detail shot', category: 'Weddings', location: 'Hyderabad', shootType: 'Details' },
  { id: 10, src: '/IMG_2014.JPG', alt: 'Wedding ceremony highlights', category: 'Weddings', location: 'Hyderabad', shootType: 'Ceremony' },
  { id: 11, src: '/IMG_2016.JPG', alt: 'Bridal portrait session', category: 'Weddings', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 12, src: '/IMG_3061.JPG', alt: 'Wedding celebration moment', category: 'Weddings', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 13, src: '/IMG_3431.JPG', alt: 'Romantic couple portrait', category: 'Weddings', location: 'Hyderabad', shootType: 'Couple' },
  { id: 14, src: '/IMG_3434.JPG', alt: 'Wedding day memories', category: 'Weddings', location: 'Hyderabad', shootType: 'Candid' },
  { id: 15, src: '/IMG_5908.JPG', alt: 'Elegant wedding photography', category: 'Weddings', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 16, src: '/IMG_9113.JPG', alt: 'Special wedding moment', category: 'Weddings', location: 'Hyderabad', shootType: 'Details' },
  { id: 17, src: '/0I2A6395.jpg', alt: 'Romantic pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
  { id: 18, src: '/0I2A6648.jpg', alt: 'Pre-wedding couple portrait', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 19, src: '/IMG_0283.JPG', alt: 'Candid pre-wedding shot', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 20, src: '/IMG_2786.JPG', alt: 'Pre-wedding celebration', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Celebration' },
  { id: 21, src: '/IMG_3588.JPG', alt: 'Elegant pre-wedding photography', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Portrait' },
  { id: 22, src: '/IMG_3589.JPG', alt: 'Pre-wedding memories', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Candid' },
  { id: 23, src: '/IMG_3595.JPG', alt: 'Beautiful pre-wedding moment', category: 'Pre-Wedding', location: 'Hyderabad', shootType: 'Couple' },
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
    description: "Capture your special day with natural, unposed moments that tell your unique love story. Our candid approach ensures every genuine emotion, laughter, and tear is beautifully preserved for generations to come.",
    imageSrc: '/RS_P8492.jpg',
  },
  {
    id: 'pre-wedding-photography',
    title: 'Pre-Wedding Photography',
    description: "From romantic pre-wedding shoots to intimate post-wedding sessions, we create timeless memories. Whether it's a destination shoot or a local session, we bring cinematic vision to every frame.",
    imageSrc: '/IMG_2016.JPG',
  },
  {
    id: 'candid-photography',
    title: 'Candid Photography',
    description: "Capture authentic moments with our candid photography services. We specialize in documenting real emotions, spontaneous interactions, and genuine expressions that tell your story naturally.",
    imageSrc: '/RS_P8572.jpg',
  },
  {
    id: 'drone-shoots',
    title: 'Drone Shoots',
    description: "Elevate your events with stunning aerial cinematography. Our drone specialists capture breathtaking overhead shots and unique perspectives that showcase the grandeur of your special moments.",
    imageSrc: '/IMG_3431.JPG',
  },
  {
    id: 'half-saree-photography',
    title: 'Half Saree Photography',
    description: "Celebrate traditional ceremonies with artistic flair. We specialize in capturing the rich cultural heritage of Andhra Pradesh weddings, from the vibrant half-saree ceremony to the sacred dothi function.",
    imageSrc: '/IMG_2014.JPG',
  },
  {
    id: 'event-photography',
    title: 'Event Photography',
    description: "Document your corporate events, birthday celebrations, and special occasions with professional photography. We ensure every important moment is captured with style and precision.",
    imageSrc: '/RS_P8513.jpg',
  },
];


export const TEAM_DATA: TeamMember[] = [
  { 
    name: 'Baji', 
    role: 'Album Designer & Photographer', 
    description: 'Baji is a talented album designer and photographer known for his creative layouts and eye for visual storytelling.',
    imageSrc: '/baji.png' 
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
    name: 'Ranga Surya (Chinnababu Garu)', 
    role: 'Founder & CEO', 
    description: 'With over 30 years of experience in photography, Mr. Chinnababu Garu (Ranga Surya) is a renowned professional known for his excellence in traditional photography. As the Vice President of the Photography Association, West Godavari District, he continues to inspire creativity and uphold the art of timeless photography.',
    imageSrc: '/ranga_surya.jpeg' 
  },
  { 
    name: 'K. Mahesh', 
    role: 'Cinematographer', 
    description: 'K. Mahesh is a talented cinematographer known for his creative visuals and storytelling through the lens.',
    imageSrc: '/mahesh.png' 
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
    id: '4', 
    url: 'https://youtu.be/JtHqeyW7owo?si=jIiOScAjoWYE0VHE',
    title: 'Wedding Photography Video 4'
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