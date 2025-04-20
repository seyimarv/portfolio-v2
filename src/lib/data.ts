import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  navItems: [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Work', section: 'work' },
    { name: 'Skills', section: 'skills' },
    { name: 'Contact', section: 'contact' }
  ],
  projects: [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'Dynamic analytics dashboard with interactive charts and data filtering.',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2017.59.51_FL-Dp90N9.png?updatedAt=1745168745545',
      smallImage1: "https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2018.00.29_PcxASEBS8.png?updatedAt=1745168745258",
      smallImage2: "https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2018.00.11_OKvgPki_T.png?updatedAt=1745168744873",
      category: ['Web Apps', 'UI/UX'],
      technologies: ['React.js', 'vite', 'Tailwind CSS'],
      caseStudyLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with product filtering, cart, and payment processing.',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.41.09_1DgouOatv.png?updatedAt=1745178447637',
      category: ['Web Apps', 'UI/UX'],
      technologies: ['React', 'Redux'],
      caseStudyLink: '#',
      githubLink: '#',
      externalLink: '#',
      smallImage1: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.41.45_I_QhYn1dJ.png?updatedAt=1745178449024',
      smallImage2: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.42.08_EPlDDmPro.png?updatedAt=1745178448976'
    },
    {
      id: 3,
      title: 'Domain Naming Service',
      description: 'Website for searching and finding available domains.',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.39.56_IkwEfW6MG.png?updatedAt=1745178476310',
      category: ['Creative', 'Web Apps'],
      technologies: ['React.js', 'vite', 'Tailwind'],
      caseStudyLink: '#',
      githubLink: '#',
      externalLink: '#',
      smallImage1: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.40.43_eW2-lzkW_.png?updatedAt=1745178476227',
      smallImage2: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.40.21_PkTnkeMUk.png?updatedAt=1745178475408'
    },
    {
      id: 4,
      title: 'Housing Platform Landing Page',
      description: 'Landing page for a housing platform, showcasing properties.',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.35.55_qv7IAnMyM.png?updatedAt=1745177833754',
      smallImage1: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.25.21_u5L3oXsMiY.png?updatedAt=1745177368777',
      smallImage2: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.25.21_u5L3oXsMiY.png?updatedAt=1745177368777',
      category: ['Web Apps', 'UI/UX'],
      technologies: ['React.js', 'vite', 'Tailwind CSS', 'shadcn'],
      caseStudyLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: 5,
      title: 'Ifumsa Website',
      description: 'Official website for Ifumsa (OAU medical students association).',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.42.45_MNePIt5lk.png?updatedAt=1745178391508',
      smallImage1: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.44.11_GIMeTFawo.png?updatedAt=1745178392382',
      smallImage2: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.44.59_4sgFDLJfU.png?updatedAt=1745178395902',
      category: ['Web Apps', 'UI/UX'],
      technologies: ['React.js', 'styled-components'],
      caseStudyLink: '#',
      githubLink: '#',
      externalLink: '#'
    }
  ],
  developmentSkills: [
    { name: 'React.js & React Ecosystem', percentage: 95 },
    { name: 'JavaScript & TypeScript', percentage: 90 },
    { name: 'CSS & Modern Frameworks', percentage: 85 },
    { name: 'Three.js & WebGL', percentage: 80 }
  ],
  designSkills: [
    { name: 'UI/UX Design', percentage: 85 },
    { name: 'Animation & Motion', percentage: 90 },
    { name: 'Creative Coding', percentage: 80 },
    { name: 'Figma & Design Tools', percentage: 75 }
  ],
  technologies: [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'CSS/SCSS', icon: 'fab fa-css3-alt' },
    { name: 'Figma', icon: 'fab fa-figma' }
  ],
  contactInfo: {
    email: 'hello@example.com',
    location: 'San Francisco, CA',
    social: [
      { platform: 'GitHub', url: '#', icon: 'fab fa-github' },
      { platform: 'Twitter', url: '#', icon: 'fab fa-twitter' },
      { platform: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' },
      { platform: 'Dribbble', url: '#', icon: 'fab fa-dribbble' }
    ]
  }
};
