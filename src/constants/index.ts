import {
  backend,
  javascript,
  reactjs,
  tailwind,
  git,
  docker,
  springBoot,
  mysql,
  postgresql,
  gdsc,
  whatsapp,
  nextJs,
  typescript,
  kubernetes,
  jenkins,
  firebase,
  kafka,
  wordpress,
  sajilodev,
  geoland,
  deukhuri,
  sharad,
  shivaraj,
  shivaoli,
  tekpun,
  payment,
  gharsanchar,
  sajilodevlogo,
  frontend,
  cloud,
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
    name: "Spring Boot",
    icon: springBoot,
  },
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
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Kafka",
    icon: kafka,
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
      "Led backend development efforts for web applications using Spring Boot.",
      "Organized workshops and study jams to educate peers about backend technologies.",
      "Mentored students in developing and deploying web applications.",
      "Collaborated with other facilitators to promote open-source projects.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NullClass ",
    icon: sajilodevlogo,
    iconBg: "#E6DEDD",
    date: "September 2024 - November 2024",
    points: [
      "Developed and deployed multiple production-ready projects, including the official website of SajiloDev.",
      "Designed and implemented RESTful APIs using Spring Boot for backend services.",
      "Built responsive user interfaces with React TypeScript and Tailwind CSS.",
      "Integrated third-party services and APIs to enhance application functionality.",
      "Promoted open-source initiatives through advocacy and educational events.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Working with Dipendra was a game-changer for my online presence. They took the time to understand my goals and delivered a website that not only looks fantastic but also performs exceptionally well. Their expertise and dedication are unmatched!",
    name: "Sharad Kumar Sharma",
    designation: "Managing Director",
    company: "Geoland Travels",
    image: sharad,
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dipendra proved me wrong. The attention to detail and creativity was impressive, resulting in a website that exceeded our expectations.",
    name: "Shiv Raj Khanal",
    designation: "Founder",
    company: "Lamahi Chamber of Commerce",
    image: shivaraj,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dipendra does. He consistently went above and beyond to ensure our website met our needs and provided valuable insights throughout the process.",
    name: "Shiva Oli",
    designation: "Campus Chief",
    company: "Deukhuri Multiple Campus",
    image: shivaoli,
  },
  {
    testimonial:
      "After Dipendra optimized our website, our traffic increased by 50%. We can't thank them enough! His expertise in SEO and user experience design significantly improved our online visibility and user engagement.",
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
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
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
    source_code_link: "https://github.com/dipenbhat557/SajiloDev",
    website_link: "https://sajilodev.com",
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
        name: "Plaid",
        color: "green-text-gradient",
      },
      {
        name: "Dwolla",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "Sentry",
        color: "blue-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/dipenbhat557/payment-management",
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
    source_code_link: "https://github.com/dipenbhat557/Geoland-Travels",
    website_link: "https://geolandtravels.com",
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
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: deukhuri,
    source_code_link: "https://github.com/dipenbhat557/Deukhuri-College",
    website_link: "https://deukhurimultiplecampus.edu.np",
  },
  {
    name: "Website For Marktech",
    description:
      "A news website in Nepal, featuring a simple UI design for news in Nepali, providing readers with the latest updates and information in an easy-to-navigate format.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: gharsanchar,
    website_link: "https://gharsanchar.com",
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
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/dipenbhat557/Whatsapp-clone",
  },
  
];


export { services, technologies, experiences, testimonials, projects };
