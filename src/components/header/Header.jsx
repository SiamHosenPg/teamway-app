import React from "react";
import Nav from "../nav/Nav";
import Button from "../button/Button";

const Header = () => {
  return (
    <div className=" pt-6 h-screen max-h-[1870px] ">
      <Nav />
      <div className="Pagearea flex gap-10  items-center justify-between h-full mt-[-60px] ">
        <div className="left w-6/12">
          <h1 className="w-11/12">
            Dolor sit amet consectetur Quod quibusdam odit voluptatem.
          </h1>
          <p className="mt-14 w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            quibusdam odit voluptatem. Dolor sit amet consectetur adipisicing
            elit. Quod quibusdam odit voluptatem.
          </p>
          <div className="flex items-center gap-5 mt-14">
            <Button buttonname="Get Started" />
            <Button buttonname="Learn More" />
          </div>
          <div className="flex items-center gap-10 mt-18 ">
            <div>
              <h3 className="font-medium">287K</h3>
              <p className="text-sm">Active Status</p>
            </div>
            <div className="w-[1px] h-14 shrink-0 bg-gray-800"></div>
            <div>
              <h3 className="font-medium">287K</h3>
              <p className="text-sm">Active Status</p>
            </div>
            <div className="w-[1px] h-14 shrink-0 bg-gray-800"></div>
            <div>
              <h3 className="font-medium">287K</h3>
              <p className="text-sm">Active Status</p>
            </div>
          </div>
        </div>

        <div className="right grid  w-5/12 grid-cols-4 gap-4 ">
          <div className="col-span-2 row-span-2 rounded-4xl  relative z-10">
            <div className="bg-white p-3 absolute top-0 left-0 mt-[-40px] ml-[-130px] z-20 rounded-full">
              <div className="h-[60px] w-[160px] bg-[#db7d1e] rounded-full flex items-center justify-center text-white font-semibold uppercase">
                Onamicka BM
              </div>
            </div>
            <img
              className="w-full h-full object-cover rounded-4xl"
              src="/profile/1.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-3 rounded-4xl overflow-hidden  ">
            <img
              className="w-full h-full object-cover"
              src="/profile/10.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-4xl   relative z-10">
            <div className="bg-white p-3 absolute top-0 right-0 mt-[30%] mr-[-100px] z-20 rounded-full">
              <div className="h-[130px] w-[130px] bg-[#db7c4b] rounded-full flex flex-col items-center justify-center text-shadow-sm text-white font-semibold uppercase">
                <h3 className="font-bold">458+</h3>
                <p className="text-sm">Project</p>
              </div>
            </div>
            <img
              className="w-full h-full object-cover rounded-4xl"
              src="/profile/3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
