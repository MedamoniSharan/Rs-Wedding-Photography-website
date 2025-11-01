export interface HeroSlide {
  id: number;
  src: string;
  alt: string;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: 'Weddings' | 'Pre-Wedding' | 'Model Shoots' | 'Events' | 'Drone Shoots' | 'Fashion';
  location: string;
  shootType: string;
}

export interface Service {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

export interface Branch {
  name: string;
  specialty: string;
  address: string;
  phone: string;
  email: string;
  mapLink?: string;
}

export type Section = 'home' | 'gallery' | 'services' | 'about' | 'contact';