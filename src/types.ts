export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  details: string;
  duration: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  provider: string;
  date: string;
}

export interface ProjectItem {
  title: string;
  context: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface PublicationItem {
  title: string;
  journal: string;
  date: string;
  link: string;
}
