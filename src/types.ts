export type PageType = 
  | 'home' 
  | 'services' 
  | 'products' 
  | 'calculator' 
  | 'projects' 
  | 'training' 
  | 'about' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  targetAudience: string;
  benefits: string[];
  scope: string[];
  deliverables: string[];
}

export interface ProductSpec {
  id: string;
  name: string;
  code: string;
  role: string;
  dimensions: string; // e.g. "400mm x 150mm x 200mm"
  weight: string; // e.g. "11.5 kg"
  compressiveStrength: string; // e.g. "> 7.5 N/mm²"
  fireRating: string; // e.g. "2 Jam (SIRIM Ujian Ketahanan Api)"
  coveragePerM2: string; // e.g. "12.5 unit / m²"
  description: string;
  keyFeatures: string[];
  recommendedUse: string;
  svgType: 'standard' | 'corner' | 'lintel' | 'half' | 'conduit';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'banglo' | 'mampu-milik' | 'homestay' | 'komersial' | 'dinding';
  location: string;
  clientType: 'Pemilik Individu' | 'Kontraktor Tempatan' | 'Pengusaha Komersial';
  builtUpArea: string;
  blocksUsed: number;
  durationDays: number;
  savingsAchieved: string;
  description: string;
  systemAttribution: string;
  highlights: string[];
  image: string;
  gallery?: string[];
  phases: { day: string; title: string; desc: string }[];
}

export interface TrainingCourse {
  id: string;
  title: string;
  level: 'Asas & Pengenalan' | 'Praktikal Tapak' | 'Lanjutan & Pengurusan IBS';
  duration: string;
  audience: string;
  mode: string;
  location: string;
  pricePerPax: string;
  syllabus: string[];
  benefits: string[];
  nextIntake: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  serviceUsed: string;
  verifiedBadge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'sistem-ibs' | 'kos-anggaran' | 'latihan' | 'permit-lppsa';
}
