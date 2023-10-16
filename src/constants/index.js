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
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    bau,
    ubs,
    carrent,
    jobit,
    quiz,
    notes,
    cyrpto,
    tripguide,
    threejs,
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
      title: "Frontend Web Development",
      icon: web,
    },
    {
      title: "React Framework",
      icon: mobile,
    },
    {
      title: "Javascript",
      icon: backend,
    },
    {
      title: "Backend Web Development ",
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
    /*
    {
      name: "TypeScript",
      icon: typescript,
    },*/
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    /*
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    
    {
      title: "College Student",
      company_name: "Bahcesehir University",
      icon: bau,
      iconBg: "#d1d1d1",
      date: "October 2021 - Present",
      points: [
        "My major is computer engineering and its language is English",
        "I have fulfilled my university English Proficiency requirement by graduating successfully from prep school(first year of major).",
        "Beside college lessons, I got started developing and maintaining small web applications and clone projects using mainly Javascript, Java and frameworks like React, Node.js.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Usta Bilgi Sistemleri A.Ş.",
      icon: ubs,
      iconBg: "#d1d1d1",
      date: "July 2023 - August 2023",
      points: [
        "I contributed to the development of a web application for human resources department to manage employees of the company.",
        "Technologies I mainly used are React.js, JavaScript, ASP.NET, PostgreSQL, github, C#",
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
  
  const projects = [
    {
      name: "Quiz App",
      description:
        "React quiz app using api to get new questions. User can change difficulty level of the quiz before starting. Each question has a timer. Also, it calculates your final score according to your correct answers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        /*
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },*/
      ],
      image: quiz,
      source_code_link: "https://github.com/helinakdogan/quiz-app",
    },
    {
      name: "Vanilla Javascript Projects",
      description:
        "Web application projects that is created using only Html Css and Javascript like Note App, Text to Speech Converter, Random Quote Generator, Currency Converter...",
      tags: [
        /*
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
        },*/
      ],
      image: notes,
      source_code_link: "https://github.com/helinakdogan/vanilla-javascript-projects-for-beginners",
    },
    {
      name: "Web 3.0 Blockchain Project",
      description:
        "Clone React blockchain app that provides safe cyrpto wallet for selling and buying crypto coins.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cyrpto,
      source_code_link: "https://github.com/helinakdogan/Web3.0-Blockchain-Application",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };