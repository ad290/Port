import {
    backend,
    cloud,
    deukhuri,
    docker,
    firebase,
    frontend,
    gdsc,
    geoland,
    gharsanchar,
    git,
    javascript,
    mysql,
    nextJs,
    payment,
    postgresql,
    reactjs,
    sajilodev,
    sajilodevlogo,
    sharad,
    shivaoli,
    shivaraj,
    
    tailwind,
    tekpun,
    typescript,
    whatsapp,
    wordpress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    description: "Crafting responsive and engaging user interfaces using React, Next.js, and Tailwind CSS."
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:"Building efficient and secure server-side applications with integrating databases like PostgreSQL, MySQL and MongoDB."
  },
  {
    title: "Cloud Services",
    icon: cloud,
    description:"Leveraging cloud platforms for deploying and managing applications, ensuring high availability and scalability."
  },
];

const technologies = [
  
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "WordPress CMS",
    icon: wordpress,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: " NxtCode",
    icon: gdsc,
    iconBg: "#383E56",
    date: "January 2025 - March 2025",
    points: [
      "Architected a microservices-based backend system using Node.js and Express, improving API performance .",
      "Reduced query response time by 25% by optimizing MongoDB databases and indexing frequently accessed data.",
      "Spearheaded the development of a React-based customer-facing dashboard, enhancing user engagement.",
      "Designed and implemented CI/CD pipelines using GitHub Actions, accelerating deployment cycles.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NullClass ",
    icon: sajilodevlogo,
    iconBg: "#E6DEDD",
    date: "September 2024 - November 2024",
    points: [
      "MERN Stack Development – Built responsive websites using MERN stack, Firebase, Tailwind CSS, and TypeScript for scalable applications.",
      "Feature Integration – Added JWT authentication, real-time chatbot, and public space for posts, likes, and comments.",
      "Payment & Subscription – Integrated a secure payment gateway for seamless subscription management.",
      "Multi-Language Support – Enabled multi-language support for better accessibility.",
      "Internship Experience – Hands-on training at Null Class, focusing on real-world web development.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Working with Aditya was a game-changer for my online presence. They took the time to understand my goals and delivered a website that not only looks fantastic but also performs exceptionally well. Their expertise and dedication are unmatched!",
    name: "Sharad Kumar Sharma",
    designation: "Managing Director",
    company: "Geoland Travels",
    image: sharad,
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aditya proved me wrong. The attention to detail and creativity was impressive, resulting in a website that exceeded our expectations.",
    name: "Shiv Raj Khanal",
    designation: "Founder",
    company: "Lamahi Chamber of Commerce",
    image: shivaraj,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aditya does. He consistently went above and beyond to ensure our website met our needs and provided valuable insights throughout the process.",
    name: "Shiva Oli",
    designation: "Campus Chief",
    company: "Deukhuri Multiple Campus",
    image: shivaoli,
  },
  {
    testimonial:
      "After Aditya optimized our website, our traffic increased by 50%. We can't thank them enough! His expertise in SEO and user experience design significantly improved our online visibility and user engagement.",
    name: "Tek Bahadhur Pun",
    designation: "CTO",
    company: "GharSanchar",
    image: tekpun,
  },
];
const projects = [
  {
    name: "Ai Career Coach",
    description:
      "A web platform built with React TypeScript and Firebase for ordering technical services such as website creation, domain checks, hosting, and maintenance. It provides a user-friendly interface for managing these services efficiently.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: sajilodev,
    source_code_link: "https://github.com/ad290/AI-Career-Coach.git",
    website_link: "https://ai-career-coach-sigma-swart.vercel.app/",
  },
  {
    name: "Job Platform",
    description:
      "A Next.js and TypeScript-based platform that connects multiple bank accounts, displays real-time transactions, and allows fund transfers. It integrates with Plaid for account linking and Dwolla for transfers, featuring secure authentication and responsive design for ease of use.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      
      {
        name: "Supabase",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/ad290/Job-Portal.git"
  },
  {
    name: "Interview Platform ",
    description:
      "A travel platform with admin and user panels, built with React.js and TypeScript, and powered by Firebase for the backend. It offers inbound and outbound tours, ticketing services, and pricing details, all in one convenient location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: geoland,
    source_code_link: "https://github.com/ad290/Full-Stack-Interview-Platform.git",
    website_link: "https://full-stack-interview-platform.vercel.app/",
  },
  {
    name: "Website For RegisterKaro",
    description:
      "A learning management system with admin and user panels, built with React.js and TypeScript, and powered by Spring Boot for the backend with MySQL for the database. It offers insights into various notices, publications, college teams, and also handles the admission process effectively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
     
      
    ],
    image: deukhuri,
    source_code_link: "https://github.com/ad290/Frontend-Assignment-.git",
    website_link: "https://frontend-assignment-pi.vercel.app/",
  },
  {
    name: "Website For Marktech",
    description:
      "A news website in Nepal, featuring a simple UI design for news in Nepali, providing readers with the latest updates and information in an easy-to-navigate format.",
    tags: [
      {
        name: "ReactJs (Vite)",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      }, {
        name: "Framer Motion",
        color: "blue-text-gradient",
      }, {
        name: "TypeScript",
        color: "blue-text-gradient",
      },

    ],
    image: gharsanchar,
    source_code_link: "https://github.com/ad290/HOM-Task.git",
    website_link: "https://homtask.netlify.app/",
  },
  {
    name: "Code Reviewer",
    description:
      "A real-time messaging application that replicates the functionality of WhatsApp, allowing users to send text messages, images, videos, and documents to their contacts seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/ad290/Code-Review.git"
   
  },
  
];


export { experiences, projects, services, technologies, testimonials };

