"use client";
import React, { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDarkMode } from "@/hook/Darkmood";

const Nav = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div className=" w-full h-[72px] sticky top-0  z-50 border-b border-border bg-background  overflow-hidden">
      <div className=" Pagearea h-full  flex items-center justify-between">
        <div className="logo w-[150px] h-full flex items-center ">
          {darkMode ? (
            <img src="/appimage/teamway-logo-white.svg" alt="" />
          ) : (
            <img src="/appimage/teamway-logo-black.svg" alt="" />
          )}
        </div>
        <ul
          className={
            `flex md:flex flex-col md:flex-row fixed md:static right-0 top-[72px] border-l md:border-none border-border p-9 md:p-0 bg-foreground md:bg-background h-full w-[300px] md:w-fit items-left md:items-center gap-7 md:gap-10  font-medium duration-200 ` +
            (isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 ")
          }
        >
          <button
            onClick={toggleDarkMode}
            className=" items-center cursor-pointer  flex md:hidden"
          >
            <div className="p-1 w-[50px] h-8 bg-foreground rounded-full inset-shadow-sm inset-shadow-border">
              <div
                className={`w-6 ${
                  darkMode ? "ml-[18px]" : "ml-[0px]"
                } shadow-sm duration-300 shadow-border h-6 flex items-center justify-center bg-background rounded-full`}
              >
                {darkMode ? (
                  <MdDarkMode className="text-lg text-text-secondary" />
                ) : (
                  <IoMdSunny className="text-lg text-text-secondary" />
                )}
              </div>
            </div>
          </button>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Packages</li>
          <li>Contact </li>
        </ul>
        <div className="hidden xl:flex items-center gap-4 justify-right">
          <button
            onClick={toggleDarkMode}
            className="flex items-center cursor-pointer   "
          >
            <div className="p-1 w-[50px] h-8 bg-foreground rounded-full inset-shadow-sm inset-shadow-border">
              <div
                className={`w-6 ${
                  darkMode ? "ml-[18px]" : "ml-[0px]"
                } shadow-sm duration-300 shadow-border h-6 flex items-center justify-center bg-background rounded-full`}
              >
                {darkMode ? (
                  <MdDarkMode className="text-lg text-text-secondary" />
                ) : (
                  <IoMdSunny className="text-lg text-text-secondary" />
                )}
              </div>
            </div>
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded-full">
            Contucts
          </button>
        </div>
        <div className="block md:hidden " onClick={toggleMenu}>
          <FaBarsStaggered className="text-2xl text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
