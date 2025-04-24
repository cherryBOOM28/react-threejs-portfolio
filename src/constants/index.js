import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    postgre,
    git,
    figma,
    docker,
    panda,
    neng,
    afm,
    innr,
    carrent,
    aml,
    gemini,
    sass,
    ig,
    linkedin,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: "JavaScript",
      icon: backend,
    },
    {
      title: "Figma",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostrgeSQL",
      icon: postgre,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Nova English",
      icon: neng,
      iconBg: "#383E56",
      date: "August 2024 - October 2024",
      points: [
        "Developing the frontend part of a marketing website and Memo-app web application using React.js, Next.js, and TypeScript.",
        "Collaborating in a cross-functional team, including frontend, backend, QA, and testing, within a Scrum-like process using Notion for task and sprint management.",
        "Integrated with backend services using Docker for local server setup and testing.",
        "Actively participated in code reviews and branch management using GitHub, ensuring code quality and compliance with established standards.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "AML Academy",
      icon: afm,
      iconBg: "#E6DEDD",
      date: "July 2023 - April 2024",
      points: [
        "Developed the frontend part of an information system using React.js.",
        "Collaborated with backend developers to integrate APIs.",
        "Worked with RESTful services for API integration.",
        "Applied Git and Agile methodologies to streamline development processes.",
        "Utilized React hooks: useState, useEffect, useRef, and useParams.",
        "Worked with MUI and CSS preprocessors (SASS).",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Innr - internship",
      icon: innr,
      iconBg: "#383E56",
      date: "April 2023 – June 2023",
      points: [
        "Implemented the frontend part of a MedTech website using React.js and Next.js, increasing component reusability by 40% and improving the user interface.",
        "Created reusable components and interactive elements using React hooks.",
        "Developed an adaptive interactive button that seamlessly integrates with the interface without interfering with other page elements.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Panda Innovation - project work",
      icon: panda,
      iconBg: "#E6DEDD",
      date: "March 2023 – June 2023",
      points: [
        "Built a user interface using React and SCSS, implementing JWT authentication systems to increase user data security by 25%.",
        "Participated in code reviews and functional discussions with the development team.",
        "Developed and launched a customized WordPress website in 3 days, improving client satisfaction by 20% through enhanced functionality and design.",
        " Integrated plugins to add additional features, including contact forms and image galleries.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const networks = [
    {
      title: "LinkedIn",
      link_network: "https://www.linkedin.com/in/louisasapina/",
      icon: linkedin,
    },
    {
      title: "Instagram",
      link_network: 'https://www.instagram.com/louisasapina/',
      icon: ig,
    },
    {
      title: "GitHub",
      link_network: 'https://github.com/cherryBOOM28',
      icon: git,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "AML Academy",
      description:
        "As a Frontend Developer at AML Academy, I contributed to the development of the frontend for an information system using React.js, showcasing my ability to create efficient and dynamic web interfaces. I collaborated closely with backend developers to ensure seamless API integration, working extensively with RESTful services.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: aml,
      source_code_link: "https://github.com/",
      websitelink: "https://www.amlacademy.kz/",
    },
    {
      name: "Gemini Clone",
      description:
        "In this educational project, I built a Generative AI app inspired by Google Gemini, utilizing React JS and the Google Gemini API. The project demonstrates how to create a fully functional generative AI app like ChatGPT or Google Gemini.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "geminiapi",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "red-text-gradient",
        },
      ],
      image: gemini,
      source_code_link: "https://github.com/cherryBOOM28/Gemini",
      websitelink: "https://clone-gemini.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, networks };