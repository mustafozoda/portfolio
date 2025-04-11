import { Languages, FolderOpen, House, GraduationCap } from "lucide-react";
import { FaUserSecret } from "react-icons/fa6";
import { BsPersonVcard } from "react-icons/bs";
import { MdInterests } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const treeData = [
  {
    label: "Home",
    icon: <FolderOpen size={16} />,
    children: [
      {
        label: "index.jsx",
        to: "/home",
        icon: <House size={16} color="#0bcf07" />,
      },
    ],
  },
  {
    label: "About Me",
    icon: <FolderOpen size={16} />,
    children: [
      {
        label: "Education/",
        icon: <FolderOpen size={16} />,
        children: [
          // {
          //   label: "bsc-computer-science.md",
          //   to: "/about-me/education/bsc-computer-science",
          //   icon: <GraduationCap size={16} color="#00ffff" />,
          // },
          {
            label: "EducationInfo.jsx",
            to: "/about-me/education/education-info",
            icon: <GraduationCap size={16} color="#00ffff" />,
          },
        ],
      },
      {
        label: "bio.jsx",
        to: "/about-me/bio",
        icon: <BsPersonVcard size={16} color="#00FF00" />,
      },
      {
        label: "interests.md",
        to: "/about-me/interests",
        icon: <MdInterests color="#00FF00" size={16} />,
      },
      // {
      //   label: "stack.md",
      //   to: "/about-me/stack",
      //   icon: <FaUserSecret />,
      // },
    ],
  },
  {
    label: "Projects",
    icon: <FolderOpen size={16} />,
    children: [
      {
        label: "portfolio-site.jsx",
        to: "/projects/portfolio-site",
        icon: <FaUserSecret />,
      },
      {
        label: "weather-app.js",
        to: "/projects/weather-app",
        icon: <FaUserSecret />,
      },
      {
        label: "task-manager.ts",
        to: "/projects/task-manager",
        icon: <FaUserSecret />,
      },
    ],
  },
  {
    label: "Skills",
    icon: <FolderOpen size={16} />,
    children: [
      {
        label: "languages.js",
        to: "/skills/languages",
        icon: <Languages size={16} color="#00FF00" />,
      },
      {
        label: "frameworks.js",
        to: "/skills/frameworks",
        icon: <FaUserSecret />,
      },
      {
        label: "tools.md",
        to: "/skills/tools",
        icon: <FaUserSecret />,
      },
    ],
  },
  {
    label: "Experience",
    icon: <FolderOpen size={16} />,
    children: [
      {
        label: "frontend-dev_2022-24.md",
        to: "/experience/frontend-dev",
        icon: <FaUserSecret />,
      },
      {
        label: "intern_2021.md",
        to: "/experience/intern",
        icon: <FaUserSecret />,
      },
      {
        label: "freelance.md",
        to: "/experience/freelance",
        icon: <FaUserSecret />,
      },
    ],
  },
  {
    label: "Contact",
    icon: <FolderOpen size={16} />,
    children: [
      {
        label: "email.js",
        to: "/contact/email",
        icon: <FaUserSecret />,
      },
      {
        label: "socials.tsx",
        to: "/contact/socials",
        icon: <FaUserSecret />,
      },
      {
        label: "resume.pdf",
        to: "/contact/resume",
        icon: <FaUserSecret />,
      },
    ],
  },
  {
    label: "Intro.js",
    icon: <CgWebsite size={16} color="#00FF00" />,
    to: "/",
  },
];

export default treeData;
