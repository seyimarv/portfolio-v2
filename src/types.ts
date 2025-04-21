import React from 'react';

export interface Project {
  smallImage1: string;
  smallImage2: string;
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  caseStudyLink: string;
  githubLink?: string;
  externalLink?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface NavItem {
  name: string;
  section: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface ContactInfo {
  email: string;
  location: string;
  social: SocialLink[];
}

export interface PortfolioData {
  navItems: NavItem[];
  projects: Project[];
  developmentSkills: Skill[];
  designSkills: Skill[];
  technologies: Technology[];
  contactInfo: ContactInfo;
}
