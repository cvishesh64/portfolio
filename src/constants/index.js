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
    carrent,
    jobit,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Express JS",
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
    {
      name: "mysql",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Hackbytes Hackthon",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Itern",
      company_name: "CodeSoft",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Aug 2023",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Organiser",
      company_name: "CSS Wars",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - April 2023",
      points: [
        "Organized the web development comeptition for 1st and 2nd years with fellow batchmates.",
        "Developing and maintaining web application/problem statements using React.js and other related technologies.",
        "Participated in code reviews and provided constructive feedback to other developers/participants.",
      ],
    },
    {
      title: "Content Creator",
      company_name: "Incandescence 2023",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Feb 2023",
      points: [
        "Created many contents for successfull organisation of the event.",
        "Written many MoUs and collaborated with various firms for successfull organisation of the event.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Vishesh helped us through it.",
      name: "Anuj Choudhary",
      designation: "SDE-III",
      company: "Amazon",
      image: "https://avatars.githubusercontent.com/u/50038492?v=4",
    },
    {
      testimonial:
        "Vishesh is a very Goal Oriented Individual. I have worked with him in the CSS, he makes sure that the task assigned to him is taken care of at the earliest. He has also contributed immensely for the good of his juniors.",
      name: "Arunesh Prasad",
      designation: "Former Web Logic Server Intern",
      company: "Oracle",
      image: "https://media.licdn.com/dms/image/D4D03AQHtpIlDvLSDrA/profile-displayphoto-shrink_100_100/0/1684420044777?e=1695859200&v=beta&t=1k86UPA8RAYnCwSbNazBn3k6RWqBVIRDncL4iB3wbG4",
    },
    {
      testimonial:
        "Vishesh has worked under me as a junior literary wing member in the CSS,NIT Silchar. I commend HIM for his skills, good conduct and work ethic. He is an asset for any team with his quick adaptability and willingness for learning",
      name: "Jyotishka Bhattacharjee",
      designation: "Lit Wing Head",
      company: "Computer Science Society,NIT Silchar",
      image: "https://media.licdn.com/dms/image/D4D35AQHTS8BpzKgZAg/profile-framedphoto-shrink_400_400/0/1662374256923?e=1690909200&v=beta&t=Ehj6ANflyzdH3eUv1i4-flniX01y5MP3ME_vZyxD1Q4",
    },
  ];
  
  const projects = [
    {
      name: "V-BLOODBANK",
      description:
      "MERN Blood Bank App For Organizations , Hospitals , and Donars maid with Tailwind CSS and Ant Design helping in keeping records of blood donation> Made for smmoth organization of various blood donation campaigns.",
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
      source_code_link: "https://github.com/cvishesh64/v-bloodbank.git",
    },
    {
      name: "Asteros",
      description:
        "Web application that enables users to explore our solar system. Equipped with 3-D view of the solar system and quiz for budding space enthusiasts.Also holds information about various planets.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/cvishesh64/Asteros.git",
    },
    {
      name: "Shirto",
      description:
        "A front-end project equipped with ReactJs, Framer Motion, openai API and ThreeJs. Allows the users to showcase their creativity be it designing logo or the whole short, backed by the powerful support of modern day AI.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJs",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/cvishesh64/shirt.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };