import React from "react";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex h-full w-full flex-row items-center gap-3 px-5">
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
