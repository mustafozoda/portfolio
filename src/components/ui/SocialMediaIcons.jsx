import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React from "react";
import useSidebarStore from "../../store/useSidebarStore";
import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const icons = [
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
    name: "Instagram",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://whatsapp.com",
    name: "WhatsApp",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
    name: "Twitter",
  },
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
    name: "Facebook",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
    name: "LinkedIn",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com",
    name: "YouTube",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com",
    name: "X",
  },
];

const SocialMediaIcons = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  return (
    <div className="flex flex-col gap-6 text-xl text-white p-4 items-center">
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
