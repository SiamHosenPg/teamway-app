import React from "react";
import Button from "../button/Button";

const Nav = () => {
  return (
    <div className="Pagearea h-[72px] sticky top-0 bg-white z-50 border-b border-gray-300  overflow-hidden">
      <div className="h-full  flex items-center justify-between">
        <div className="logo w-[150px] h-full flex items-center ">
          <img src="/appimage/teamway-logo-black.svg" alt="" />
        </div>
        <ul className="flex items-center gap-10  font-medium ">
          <li>Home</li>
          <li>Priching</li>
          <li>Addmation</li>
          <li>News</li>
          <li>About</li>
        </ul>
        <div>
          <button className="px-4 py-2 border border-gray-300 rounded-full">
            Contucts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
