import {
    mobile,
    backend,
    creator,
    web,
    carrent,
    jobit,
    tripguide,
    cpp,
    c,
    csharp,
    css,
    git,
    html,
    javascript,
    nodejs,
    reactjs,
    typescript,
    realSecureIcon,
    unbIcon,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
   
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Csharp",
      icon: csharp,
    },
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Network Engineer",
      company_name: "Real Secure IT ",
      location: "Dubai, UAE",
      icon: realSecureIcon,
      iconBg: "#FFFFFF",
      date: "May 2024 - September 2024",
      points: [
        "Utilized network monitoring tools and automation scripts to maintain optimal server performance, reducing downtime by 15% through strategic oversight and proactive measures.",
        "Conducted comprehensive antivirus scans and system health checks using Remote Monitoring and Management (RMM) platforms, identifying and mitigating 95% of security threats and vulnerabilities.",
        "Delivered exceptional service desk support, resolving complex client issues with technical expertise, leading to a 30% increase in user satisfaction ratings.",
        "Performed detailed hardware inspections, diagnostics, and backup verifications, increasing system reliability and reducing hardware failures by 10%.",
        "Maintained accurate records of hardware and software assets, implementing license management solutions to achieve 100% compliance with software licensing requirements.",
        "Used data analytics to compile and present monthly reports detailing system performance metrics, maintenance activities, and security assessments, providing actionable insights to stakeholders and improving decision-making processes.",
      ],
    },
    {
      title: "Graphic Designer On-Call",
      company_name: "University of New Brunswick ",
      location: "Fredericton, Canada",
      icon: unbIcon,
      iconBg: "#FFFFFF",
      date: "September 2023 - October 2023",
      points: [
        "Developed engaging graphic content for the university's marketing and promotional materials, resulting in a 20% increase in student engagement with social media content.",
        "Worked closely with marketing, event planning, and communications teams to design cohesive and visually appealing materials, aligning with brand guidelines and objectives.",
        "Proficiently used Adobe Creative Suite (Photoshop, Illustrator, InDesign), Canva, and other design tools to create high-quality digital and print designs, resulting in a 25% reduction in the time required to upload content and improve overall design efficiency.",
        "Successfully handled 10+ design projects, ensuring timely delivery while maintaining high standards of quality and creativity.",
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
      name: "Password Management System",
      description:
        "The Password Management System is a secure application that allows users to store, generate, and manage passwords. It features user authentication, AES encryption for password security, and a command-line interface for adding, viewing, updating, and deleting passwords.",
      tags: [
        {
          name: "java",
          color: "yellow-text-gradient",
        },
    
      ],
      image: carrent,
      source_code_link: "https://github.com/cirizzil/PasswordManager",
    },
    {
      name: "Sign Language Detection CNN",
      description:
        "This project involves creating a real-time sign language detection system using CNNs to translate sign language gestures into text. It aims to improve communication accessibility for the hearing-impaired by accurately recognizing and displaying sign language gestures from live video input in real-time.",
      tags: [
        {
          name: "Jupyter Notebook",
          color: "yellow-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/cirizzil/SignLanguageDetectionCNN",
    },
    {
      name: "Daily Bible Verse",
      description:
        "This project is a simple web application that displays a daily Bible verse each time a button is clicked. The main purpose of this project is to provide an easy way to read and reflect on a random Bible verse daily. The application uses an API to fetch the verses and displays them in a visually appealing format.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/cirizzil/DailyBibleVerse",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };