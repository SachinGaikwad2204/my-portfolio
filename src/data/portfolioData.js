export const personalInfo = {
  name: 'Sachin Sominath Gaikwad',
  title: 'Full Stack Software Developer',
  email: 'sachingaikwadbn@gmail.com',
  phone: '+91 97657 52923',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/SachinGaikwad2204',
  linkedin: 'https://linkedin.com/in/yourusername',
  summary: 'Passionate and driven Full Stack Software Developer with hands-on experience designing, building, and deploying production-ready web applications from the ground up. Proficient in Java Spring Boot REST API development, React.js frontend engineering, relational database design, and cloud deployment via Vercel.'
};

export const skills = {
  languages: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'Python'],
  backend: ['Spring Boot', 'Spring MVC', 'RESTful API', 'Microservices', 'Hibernate ORM'],
  frontend: ['React.js', 'Thymeleaf', 'Responsive UI', 'Component-Based Architecture'],
  database: ['MySQL', 'PostgreSQL', 'Query Optimization', 'Schema Design'],
  tools: ['Git', 'GitHub', 'Maven', 'Vercel', 'CI/CD', 'Postman'],
  security: ['JWT', 'Spring Security', 'RBAC', 'OAuth2']
};

export const projects = [
  {
    id: 1,
    title: 'Voice AI JARVIS Core',
    tech: ['React.js', 'AI/ML', 'Web Speech API', 'Vercel'],
    description: 'Your intelligent voice companion ? ask, calculate, search, or just say hi. A voice-powered web application with 14+ recognized intents and AI/ML powered core.',
    link: 'https://voice-ai-frontend-rmdhc6ygf-sachingaikwad2204s-projects.vercel.app/',
    github: 'https://github.com/SachinGaikwad2204/voice-ai-frontend',
    achievements: [
      'Built a voice-powered intelligent assistant with 14+ recognized intents',
      'Achieved <100ms response time for real-time interactions',
      'Integrated Web Speech API for voice recognition and synthesis',
      'Deployed on Vercel with 42 active users'
    ]
  },
  {
    id: 2,
    title: 'AI SaaS Web Application',
    tech: ['React.js', 'Spring Boot', 'AI API', 'Vercel'],
    description: 'Architected and deployed a full-stack AI-powered SaaS web application on Vercel serving live production traffic with 99.9% uptime. Designed 10+ REST API endpoints for AI request routing and data management.',
    link: 'https://ai-ui-app-chi.vercel.app/',
    github: 'https://github.com/yourusername/ai-app',
    achievements: [
      'Optimized API response times by 30% (500ms -> 350ms)',
      'Integrated third-party AI API for intelligent conversational features',
      'Implemented JWT-based secure authentication with RBAC',
      'Configured Vercel CI/CD pipeline reducing deployment time by 40%'
    ]
  },
  {
    id: 3,
    title: 'Employee Management System',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Hibernate'],
    description: 'Designed and deployed a production-ready full-stack enterprise HR management system on Vercel, managing 100+ employee records with 15+ RESTful endpoints for complete CRUD operations.',
    link: 'https://employee-mgt-system-navy.vercel.app/',
    github: 'https://github.com/yourusername/employee-mgt',
    achievements: [
      'Reduced data retrieval time by 35% through optimized database schema',
      'Implemented role-based access control with 3 user roles (Admin, Manager, Employee)',
      'Built 12+ dynamic React.js UI components for responsive interface',
      'Reduced boilerplate SQL by 60% using Hibernate ORM'
    ]
  }
];

export const experience = {
  highlights: [
    'Deployed 2 full-stack production applications on Vercel with live traffic',
    'Improved API response time by 30% (500ms -> 350ms)',
    'Reduced database retrieval time by 35% via optimized MySQL schema',
    'Reduced boilerplate SQL code by 60% leveraging Hibernate ORM',
    'Secured 100% of API endpoints using JWT authentication and RBAC',
    'Reduced manual HR tracking effort by 50% through automated attendance module'
  ]
};
