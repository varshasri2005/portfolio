export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Web App' | 'AI & Automation';
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  image?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    tag?: string;
  }[];
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  program?: string;
  location?: string;
  description: string[];
  techStack: string[];
  badge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  coursework?: string[];
  highlights?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  grade?: string;
  badgeType: 'gold' | 'elite' | 'standard';
  description: string;
  category?: 'Cloud & Specializations' | 'Full Stack & Software' | 'Internship Honors' | 'Foundations & Databases';
  skills?: string[];
  credentialId?: string;
  certificateImage?: string;
  verificationUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organization: string;
  description: string;
  date?: string;
  paperTitle?: string;
  certificateImage?: string;
}
