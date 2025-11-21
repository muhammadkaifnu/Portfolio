import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

const mywork_data = [
  {
    w_no: 1,
    w_name: 'Portfolio Website',
    w_img: project1_img,
    headline: 'Interactive personal portfolio built with Vite + React.',
    description:
      'A fast, mobile-friendly portfolio that highlights my story, services, and recent client work. Includes smooth scrolling, theming, contact integrations, and optimized imagery.',
    repo: 'https://github.com/username/portfolio',
    live: 'https://your-portfolio.vercel.app',
    techStack: ['React', 'Vite', 'Framer Motion', 'CSS Modules'],
    gallery: [project1_img, project2_img],
  },
  {
    w_no: 2,
    w_name: 'SaaS Analytics',
    w_img: project2_img,
    headline: 'Admin portal with subscription analytics dashboards.',
    description:
      'Built a configurable dashboard for a SaaS product team. Features role-based access, real-time KPI charts, CSV exports, and a marketing landing page.',
    repo: 'https://github.com/username/saas-analytics',
    live: 'https://analytics-demo.netlify.app',
    techStack: ['React', 'Redux Toolkit', 'Recharts', 'Express'],
    gallery: [project2_img, project3_img],
  },
  {
    w_no: 3,
    w_name: 'Brand Landing Page',
    w_img: project3_img,
    headline: 'Story-driven landing page for a lifestyle brand launch.',
    description:
      'Crafted responsive sections, testimonial sliders, and newsletter flows while maintaining brand consistency and accessibility.',
    repo: 'https://github.com/username/brand-landing',
    live: 'https://brand-landing.pages.dev',
    techStack: ['React', 'GSAP', 'Netlify Forms'],
    gallery: [project3_img, project4_img],
  },
  {
    w_no: 4,
    w_name: 'Commerce Dashboard',
    w_img: project4_img,
    headline: 'Order management experience for a boutique store.',
    description:
      'Includes inventory CRUD, order fulfilment board, notifications, and PDF invoices powered by a lightweight Node backend.',
    repo: 'https://github.com/username/commerce-dashboard',
    live: 'https://commerce-dashboard.fly.dev',
    techStack: ['React', 'React Query', 'Node', 'MongoDB'],
    gallery: [project4_img, project5_img],
  },
  {
    w_no: 5,
    w_name: 'Learning App',
    w_img: project5_img,
    headline: 'Gamified learning paths with progress tracking.',
    description:
      'Implemented course playlists, quiz modules, streak reminders, and offline-ready caching for a better student experience.',
    repo: 'https://github.com/username/learning-app',
    live: 'https://learning-app.web.app',
    techStack: ['React', 'Firebase', 'Styled Components'],
    gallery: [project5_img, project6_img],
  },
  {
    w_no: 6,
    w_name: 'Product Microsite',
    w_img: project6_img,
    headline: 'Launch microsite with 3D hero and scroll-triggered reveals.',
    description:
      'Collaborated with the design team to implement a hero canvas, feature timelines, and conversion-focused CTAs.',
    repo: 'https://github.com/username/product-microsite',
    live: 'https://product-microsite.onrender.com',
    techStack: ['React', 'Three.js', 'GSAP'],
    gallery: [project6_img, project1_img],
  },
]

export default mywork_data