import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full flex justify-between px-5 items-center border-border border-t h-full">
      <div></div>
      <div className="flex justify-center  text-gray-400 tracking-widest font-code items-center gap-2">
        <a href="https://github.com/mustafozoda">mustafozoda</a>
        <FaGithub color="white" size={18} />
      </div>
    </div>
  );
};

export default Footer;
