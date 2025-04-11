import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React from "react";
import useSidebarStore from "../../store/useSidebarStore";
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const icons = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/mustaffozoda",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/mustafozoda",
    name: "GitHub",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/992888999864?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20chat.",
    name: "WhatsApp",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/mustaffozoda/",
    name: "Instagram",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/mustaffozoda/",
    name: "Facebook",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/mustaffozoda/",
    name: "X",
  },
];

const SocialMediaIcons = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  return (
    <div className="flex flex-col items-center gap-6 p-4 text-xl text-white">
      <span onClick={toggleSidebar} className="cursor-pointer">
        {isSidebarOpen ? (
          <PanelLeftClose size={20} />
        ) : (
          <PanelLeftOpen size={20} />
        )}
      </span>
      {icons.map(({ icon, link, name }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
