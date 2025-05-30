import React from "react";
import Button from "../button/Button";

const Nav = () => {
  return (
    <div className="Pagearea h-[70px] overflow-hidden">
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
          <Button buttonname="Contucts" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
