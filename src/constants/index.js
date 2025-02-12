import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  scss,
  jwt,
  reactjs,
  mongodb,
  nodejs,
  vercel,
  netlify,
  git,
  githubLogo,
  bootstrap,
  socketio,
  vite,
  postgresql,
  habbitly,
  wwc,
  calcutor,
  planyourwealth,
  youtubeclone,
  senior,
  creative,
  freelance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
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
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githubLogo,
  },
  {
    name: "jwt",
    icon: jwt,
  },
  {
    name: "socketio",
    icon: socketio,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "netlify",
    icon: netlify,
  },
];

const experiences = [
  {
    title: "Kitchen & Maintenance Apprentice",
    company_name: "Senior Living Community",
    icon: senior,
    iconBg: "#333333",
    date: "Nov 2016 - Jan 2017",
  },
  {
    title: "Film & Art Apprentice",
    company_name: "Creative Art Works",
    icon: creative,
    iconBg: "#333333",
    date: "Jun 2017 - Aug 2018",
  },
  {
    title: "Software Engineer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#333333",
    date: "Mar 2023 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Habbitly [WIP]",
    description:
      "A Full-Stack Application to help user’s keep track of their goals and habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: habbitly,
    repo: "https://github.com/gitlep1/Habbitly",
    demo: "https://habbitly.vercel.app",
  },
  {
    id: "project-2",
    name: "World Wide Chess",
    description:
      "A full-stack chess application that offers both AI-driven single-player and real-time multiplayer gameplay.",
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
    image: wwc,
    repo: "https://github.com/gitlep1/World-Wide-Chess",
    demo: "https://world-wide-chess.vercel.app",
  },
  {
    id: "project-3",
    name: "Calcutor",
    description:
      "A full-stack calculator app with basic and scientific modes, built using React and Node.js.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: calcutor,
    repo: "https://github.com/gitlep1/React-Calculator-App",
    demo: "https://react-calculator-frontend.vercel.app",
  },
  {
    id: "project-4",
    name: "Plan Your Wealth",
    description: `A Full-Stack Application designed to help users track their finances, set savings goals, and manage expenses efficiently.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "psql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: planyourwealth,
    repo: "https://github.com/gitlep1/PlanYourWealth",
    demo: "https://plan-your-wealth.vercel.app",
  },
  {
    id: "project-5",
    name: "Youtube Clone",
    description:
      "A full-stack YouTube clone built with the MERN stack, featuring video search, playback, user authentication, and a comment system.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeclone,
    repo: "https://github.com/GalaticGamingBros/youtube-clone",
    demo: "youtube-clone-ggb.netlify.app",
  },
];

export { services, technologies, experiences, projects };
