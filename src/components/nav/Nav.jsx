import React from "react";
import Button from "../button/Button";

import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className=" w-full h-[72px] sticky top-0  z-50 border-b border-border bg-background  overflow-hidden">
      <div className=" Pagearea h-full  flex items-center justify-between">
        <div className="logo w-[150px] h-full flex items-center ">
          <img src="/appimage/teamway-logo-black.svg" alt="" />
        </div>
        <ul className="hidden md:flex items-center gap-10  font-medium ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Packages</li>
          <li>Contact </li>
        </ul>
        <div className="hidden xl:block">
          <button className="px-4 py-2 border border-gray-600 rounded-full">
            Contucts
          </button>
        </div>
        <div className="block md:hidden ">
          <FaBarsStaggered className="text-2xl text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
