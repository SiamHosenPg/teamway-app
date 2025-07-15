import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-28">
      <div className="Pagearea flex flex-col-reverse sm:flex-row gap-16 justify-between text-gray-300">
        <div className="w-full md:w-2/5 flex flex-col gap-6">
          <div className="w-[180px]">
            <img src="/appimage/teamway-logo-white.svg" alt="" />
          </div>
          <p className="text-gray-200 w-10/12">
            Teamway is a creative team offering web, app, and design solutions
            to help your ideas grow online.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/5 md:w-1/5">
          <ul className="flex flex-col gap-2">
            <li className="font-semibold text-white mb-4 ">About Us</li>
            <li>Our Team</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Why Choose Us</li>
            <li>Our Process</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" hidden md:block w-1/5">
          <ul className="flex flex-col gap-2">
            <li className="font-semibold text-white mb-4 ">Services</li>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Graphics Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className=" hidden lg:block w-1/5">
          <ul className="flex flex-col gap-2">
            <li className="font-semibold text-white mb-4 ">Contact</li>
            <li>Resources</li>
            <li>Documentation</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
