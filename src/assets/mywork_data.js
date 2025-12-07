// BloodBank Project Images
import bloodBank1 from './LatestWork/bloodBank/bloodbank1.png'
import bloodBank2 from './LatestWork/bloodBank/bloodbank2.png'
import bloodBank3 from './LatestWork/bloodBank/bloodbank3.png'
import bloodBank4 from './LatestWork/bloodBank/bloodbank4.png'
import bloodBank5 from './LatestWork/bloodBank/bloodbank5.png'
import bloodBank6 from './LatestWork/bloodBank/bloodbank6.png'
import bloodBank7 from './LatestWork/bloodBank/bloodbank7.png'
import bloodBank8 from './LatestWork/bloodBank/bloodbank8.png'
import bloodBank9 from './LatestWork/bloodBank/bloodbank9.png'
import bloodBank10 from './LatestWork/bloodBank/bloodbank10.png'

// Evibe Project Images
import evibe1 from './LatestWork/evibe/evibe1.png'
import evibe2 from './LatestWork/evibe/evibe2.png'
import evibe3 from './LatestWork/evibe/evibe3.png'
import evibe4 from './LatestWork/evibe/evibe4.png'
import evibe5 from './LatestWork/evibe/evibe5.png'
import evibe6 from './LatestWork/evibe/evibe6.png'
import evibe7 from './LatestWork/evibe/evibe7.png'
import evibe8 from './LatestWork/evibe/evibe8.png'
import evibe9 from './LatestWork/evibe/evibe9.png'

// FoodUI Project Images
import foodui1 from './LatestWork/foodui/food1.jpeg'
import foodui2 from './LatestWork/foodui/food2.jpeg'

// Helpix Project Images
import helpix1 from './LatestWork/helpix/login.png'
import helpix2 from './LatestWork/helpix/signup.png'
import helpix3 from './LatestWork/helpix/dashboard1.png'
import helpix4 from './LatestWork/helpix/dashboard2.png'
import helpix5 from './LatestWork/helpix/dashboard3.png'
import helpix6 from './LatestWork/helpix/dashboard4.png'
import helpix7 from './LatestWork/helpix/adminpanel.png'
import helpix8 from './LatestWork/helpix/adminpanel2.png'
import helpix9 from './LatestWork/helpix/adminpanel3.png'
import helpix10 from './LatestWork/helpix/adminpanel4.png'

// N8N Project Images
import n8n1 from './LatestWork/n8n/emai-n8n.jpeg'
import n8n2 from './LatestWork/n8n/n8nnn2.png'
import n8n3 from './LatestWork/n8n/n8nnnn3.png'

// SafeScan Project Images and Video
import safescan1 from './LatestWork/SafeScan/safescan1.png'
import safescan2 from './LatestWork/SafeScan/safescaan2.png'
import safescan3 from './LatestWork/SafeScan/safescan3.png'
import safescan4 from './LatestWork/SafeScan/safescan4.png'
import safescan5 from './LatestWork/SafeScan/safescan5.png'
import safescanVideo from './LatestWork/SafeScan/demo.mp4'

// Baller Project Images
import baller1 from './LatestWork/baller/baller1.png'
import baller2 from './LatestWork/baller/baller1.1.png'
import baller3 from './LatestWork/baller/baller2.png'
import baller4 from './LatestWork/baller/baller3.png'
import baller5 from './LatestWork/baller/baller4.png'
import baller6 from './LatestWork/baller/baller5.png'
import baller7 from './LatestWork/baller/baller6.png'
import baller8 from './LatestWork/baller/baller7.png'
import baller9 from './LatestWork/baller/baller8.png'

const mywork_data = [
  {
    w_no: 1,
    w_name: 'BloodBank Management System',
    w_img: bloodBank1,
    headline: 'Full-stack blood donation and management platform.',
    description:
      'A comprehensive blood bank management system that connects donors with recipients. Features include donor registration, blood inventory tracking, request management, and real-time notifications. Built with modern web technologies to ensure reliability and scalability.',
    repo: 'https://github.com/muhammadkaifnu/bloodbank',
    live: 'https://bloodbank-demo.vercel.app',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    gallery: [bloodBank1, bloodBank2, bloodBank3, bloodBank4, bloodBank5, bloodBank6, bloodBank7, bloodBank8, bloodBank9, bloodBank10],
  },
  {
    w_no: 2,
    w_name: 'Evibe - Event Management Platform',
    w_img: evibe1,
    headline: 'Modern event discovery and booking platform.',
    description:
      'A sleek event management platform that allows users to discover, create, and manage events. Features include event listings, ticket booking, user authentication, event categories, and an intuitive admin dashboard for event organizers.',
    repo: 'https://github.com/muhammadkaifnu/evibe',
    live: 'https://evibe-platform.netlify.app',
    techStack: ['React', 'Firebase', 'Material-UI', 'Stripe API'],
    gallery: [evibe1, evibe2, evibe3, evibe4, evibe5, evibe6, evibe7, evibe8, evibe9],
  },
  {
    w_no: 3,
    w_name: 'Helpix - Customer Support System',
    w_img: helpix3,
    headline: 'AI-powered customer support and ticketing system.',
    description:
      'A comprehensive customer support platform with ticket management, live chat, knowledge base, and analytics dashboard. Includes role-based access control for admins and support agents, automated ticket routing, and performance metrics.',
    repo: 'https://github.com/muhammadkaifnu/helpix',
    live: 'https://helpix-support.vercel.app',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    gallery: [helpix1, helpix2, helpix3, helpix4, helpix5, helpix6, helpix7, helpix8, helpix9, helpix10],
  },
  {
    w_no: 4,
    w_name: 'Food Ordering UI',
    w_img: foodui1,
    headline: 'Beautiful and responsive food delivery interface.',
    description:
      'A modern food ordering interface with smooth animations and intuitive user experience. Features include restaurant browsing, menu exploration, cart management, and order tracking. Designed with mobile-first approach for optimal performance.',
    repo: 'https://github.com/muhammadkaifnu/foodui',
    live: 'https://foodui-demo.pages.dev',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    gallery: [foodui1, foodui2],
  },
  {
    w_no: 5,
    w_name: 'N8N Automation Workflows',
    w_img: n8n1,
    headline: 'Custom automation workflows with n8n.',
    description:
      'A collection of powerful automation workflows built with n8n. Includes email automation, data synchronization, API integrations, and scheduled tasks. Demonstrates expertise in workflow automation and integration of various services.',
    repo: 'https://github.com/muhammadkaifnu/n8n-workflows',
    live: null,
    techStack: ['n8n', 'Node.js', 'APIs', 'Webhooks'],
    gallery: [n8n1, n8n2, n8n3],
  },
  {
    w_no: 6,
    w_name: 'SafeScan - QR & URL Security Scanner',
    w_img: safescan1,
    headline: 'ML-powered QR code and URL safety scanner.',
    description:
      'An intelligent mobile application that scans QR codes and URLs to detect potential security threats. Using machine learning models trained on malicious URL patterns, SafeScan analyzes and alerts users about unsafe links before they visit them. Features include real-time QR code scanning, URL validation, threat detection, and detailed safety reports. Built with Flutter for cross-platform mobile experience and Python for ML model integration.',
    repo: 'https://github.com/muhammadkaifnu/safescan',
    live: 'https://safescan-platform.vercel.app',
    techStack: ['Flutter', 'Python', 'Machine Learning', 'TensorFlow', 'QR Scanner'],
    gallery: [safescan1, safescan2, safescan3, safescan4, safescan5],
    video: safescanVideo,
  },
  {
    w_no: 7,
    w_name: 'Baller - Football Analytics Platform',
    w_img: baller1,
    headline: 'Comprehensive football statistics and match prediction platform.',
    description:
      'A full-stack football analytics platform that provides real-time data for top 5 European leagues. Features include live match schedules and results, top scorers leaderboards, league standings, latest football news, and AI-powered match predictions. Uses Python web scraping to aggregate data from multiple sources and machine learning algorithms to predict match outcomes and league winners. Built with MERN stack for robust performance and Tailwind CSS for modern, responsive design.',
    repo: 'https://github.com/muhammadkaifnu/baller',
    live: 'https://baller-football.vercel.app',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Python', 'Tailwind CSS'],
    gallery: [baller1, baller2, baller3, baller4, baller5, baller6, baller7, baller8, baller9],
  },
]

export default mywork_data
