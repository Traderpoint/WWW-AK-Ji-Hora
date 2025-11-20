export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string; // New field for modal content
  icon: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  serviceId?: string; // Optional link to specific service modal
}