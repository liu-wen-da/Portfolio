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
    carrent,
    jobit,
    tripguide,
    threejs,
    lightcast,
    scale,
    pathways,
    parsing,
    resturant,
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
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
    {
      title: "Resturant Owner",
      icon: backend,
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
      title: "Software Engineer",
      company_name: "SCALE",
      icon: scale,
      iconBg: "#353A40",
      date: "Aug 2020 - Dec 2021",
      points: [
        "Designed and developed a MVP mobile version of the company website with 100+ active users.",
        "Added features for students to view, manage, and create accadmic schedule. Also incorporated a API to build a course recommendation system for the student base on their major and interest.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Analytics Intern",
      company_name: "LightCast",
      icon: lightcast,
      iconBg: "#383E56",
      date: "Sep 2022 - Jan 2024",
      points: [
        "Developing and maintaining applications using Python.",
        "Developed new tools and tests to more efficiently process University data.",
        "Implementing new features and optimizing existing scripts to improve performance and reliability.",
        "Collaborating with the product team to design and implement new features to better automate the data processing pipeline.",
      ],
    },
  ];
  
  const testimonials = [
  ];
  
  const projects = [
    {
      name: "Pathways Moblie",
      description:
        "The app will streamline the process of selecting a degree from an institution, tracking one’s progress through time for their degree, and making adjustments to any hurdles faced.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pathways,
      source_code_link: "https://github.com/liu-wen-da/Moblie-App",
    },
    {
      name: "YELP data",
      description:
        "This application parses the Yelp data and allow the user to use as a analysis tool that allows users to search for businesses and view their reviews, ratings, and other information.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Parsing JSON",
          color: "green-text-gradient",
        },
        {
          name: "UI",
          color: "pink-text-gradient",
        },
      ],
      image: parsing,
      source_code_link: "https://github.com/liu-wen-da/Yelp-data",
    },
    {
      name: "Resturant website",
      description:
        "In progress | the picture is a Figma mockup of the website final design will be different.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: resturant,
      source_code_link: "https://github.com/liu-wen-da/Restaurant_Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };