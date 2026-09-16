import { PortfolioData } from '../types';
import { Github, Twitter, Linkedin } from 'lucide-react';

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
      title: 'MedRehearse',
      description: 'OSCE practice for medical students and doctors — take the history from an AI patient by voice, examine, order tests and treat, then get marked like a real examiner with a guideline citation behind every point.',
      image: '/projects/medrehearse-main.jpg',
      smallImage1: '/projects/medrehearse-2.jpg',
      smallImage2: '/projects/medrehearse-3.jpg',
      category: ['Web Apps', 'AI'],
      technologies: ['Next.js', 'React Three Fiber', 'Vercel AI SDK', 'LiveKit'],
      caseStudyLink: '#',
      githubLink: 'https://github.com/seyimarv/MedRehearse',
      externalLink: 'https://med-rehearse.vercel.app/'
    },
    {
      id: 2,
      title: 'FormCraft AI',
      description: 'AI form builder that turns a plain-English description into a working, shareable form with response analytics behind it.',
      image: '/projects/formcraft-main.jpg',
      smallImage1: '/projects/formcraft-2.jpg',
      smallImage2: '/projects/formcraft-3.jpg',
      category: ['Web Apps', 'AI'],
      technologies: ['Next.js', 'Vercel AI SDK', 'Drizzle ORM', 'Clerk'],
      caseStudyLink: '#',
      githubLink: 'https://github.com/seyimarv/ai-form-builder',
      externalLink: 'https://formbuilder-phi-five.vercel.app/'
    },
    {
      id: 3,
      title: 'Be My Valentine',
      description: 'Build a personalised Valentine with an AI-written letter, then send it as a link — complete with a "No" button that runs away.',
      image: '/projects/valentine-main.jpg',
      smallImage1: '/projects/valentine-3.jpg',
      smallImage2: '/projects/valentine-2.jpg',
      category: ['Creative', 'Web Apps'],
      technologies: ['Next.js', 'Framer Motion', 'Vercel AI SDK', 'Prisma'],
      caseStudyLink: '#',
      githubLink: 'https://github.com/seyimarv/valentino',
      externalLink: 'https://bemyvalentino.vercel.app/'
    },
    {
      id: 4,
      title: 'ShopHaul',
      description: 'Headless storefront built on Medusa — instant Algolia search across collections, a persistent cart, and Paystack checkout.',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-05-08%20at%2004.35.08_IOwLKNC6b.png?updatedAt=1746676209559',
      category: ['Web Apps', 'UI/UX'],
      technologies: ['Next.js', 'Tailwind CSS', 'TanStack Query'],
      caseStudyLink: '#',
      githubLink: 'https://github.com/seyimarv/shopecommerce-frontend',
      externalLink: 'https://shophaul.vercel.app/',
      smallImage1: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-05-08%20at%2004.35.37_5ZNxQPu7Z.png?updatedAt=1746676208568',
      smallImage2: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-05-08%20at%2004.37.00_VWDWLDeu4.png?updatedAt=1746676207823'
    },
    {
      id: 5,
      title: 'Noble Clothing',
      description: 'Full-featured e-commerce platform with product filtering, cart, and payment processing.',
      image: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.41.09_1DgouOatv.png?updatedAt=1745178447637',
      category: ['Web Apps', 'UI/UX'],
      technologies: ['React', 'Redux'],
      caseStudyLink: '#',
      githubLink: 'https://github.com/seyimarv/noble-clothing',
      externalLink: 'https://noble-clot.netlify.app/',
      smallImage1: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.41.45_I_QhYn1dJ.png?updatedAt=1745178449024',
      smallImage2: 'https://ik.imagekit.io/hkuo8pbq93/Screenshot%202025-04-20%20at%2020.42.08_EPlDDmPro.png?updatedAt=1745178448976'
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
    email: 'oluwaseyitan299@gmail.com',
    location: 'Lagos, Ng',
    social: [
      { platform: 'GitHub', url: 'https://github.com/seyimarv', icon: Github },
      { platform: 'Twitter', url: 'https://x.com/Femsey11', icon: Twitter },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/oyewo-oluwaseyitan-marvelous-2a47441a9/', icon: Linkedin },
    ]
  }
};
