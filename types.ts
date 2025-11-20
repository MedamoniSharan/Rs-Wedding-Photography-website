export interface HeroSlide {
  id: number;
  src: string;
  alt: string;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: 'Wedding' | 'Pre-Wedding' | 'Haldi' | 'Half Saree' | 'Celebrate' | 'Candid' | 'Mehendi';
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
  description?: string;
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

export interface YouTubeVideo {
  id: string;
  url: string;
  title?: string;
}

export type Section = 'home' | 'gallery' | 'services' | 'about' | 'contact' | 'videos';

export interface Testimonial {
  id: string;
  url: string;
  title?: string;
  clientName?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LocationData {
  id: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  image: string;
  url: string;
  h1: string;
  intro: string[];
  whyChooseUs: {
    title: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    items: string[];
    closingNote?: string;
  };
  areasServed?: {
    title: string;
    description: string;
    areas: string[];
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    title: string;
    subtitle?: string;
  };
}