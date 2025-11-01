import type { HeroSlide, Photo, Service, TeamMember, Branch } from './types';

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
    title: 'Candid Wedding Photography',
    description: "You're getting married or your family members. Awesome! Choosing the right candid wedding photographer is one of the most important...",
    imageSrc: '/RS_P8492.jpg',
  },
  {
    title: 'Half Saree – Dothi Function',
    description: "Saree/Dothi Ceremony Stories PixelMatrix Photography is one of the Best Photography in Hyderabad that specializes in capturing the beauty and...",
    imageSrc: '/IMG_2014.JPG',
  },
  {
    title: 'Pre And Post Wedding Photography',
    description: "At PixelMatrix Studio, we understand that your wedding is more than just an event—it's a celebration of love, emotion, and...",
    imageSrc: '/IMG_2016.JPG',
  },
  {
    title: 'Cakesmash/Babyshoot/Newborn',
    description: "Cake smash photography: Everything you wanted to know Some trends in photography come and go. Before you even blink, it's...",
    imageSrc: '/IMG_3061.JPG',
  },
];


export const TEAM_DATA: TeamMember[] = [
  { name: 'Rohan Sharma', role: 'Lead Photographer & Founder', imageSrc: 'https://picsum.photos/seed/team1/500/500' },
  { name: 'Priya Sharma', role: 'Cinematographer', imageSrc: 'https://picsum.photos/seed/team2/500/500' },
  { name: 'Rohan Verma', role: 'Drone Specialist', imageSrc: 'https://picsum.photos/seed/team3/500/500' },
  { name: 'Anjali Desai', role: 'Editor & Retoucher', imageSrc: 'https://picsum.photos/seed/team4/500/500' },
];

export const BRANCHES_DATA: Branch[] = [
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