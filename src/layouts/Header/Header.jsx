import React from "react";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full gap-3 h-full px-5  flex flex-row  items-center">
      <div>
        <Link to={"/"}>
          <FaCode size={20} />
        </Link>
      </div>
      <span className="logo-name font-code">mustafozoda</span>
      <div></div>
    </div>
  );
};

export default Header;
