"use client";

import React from "react";
import Nav from "../nav/Nav";
import Button from "../button/Button";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="   h-auto pt-32 pb-24 lg:pt-6 lg:h-screen max-h-[1870px] ">
      <div className="Pagearea flex flex-col-reverse lg:flex-row  gap-32  lg:gap-10   items-center justify-between h-full mt-[-60px] ">
        <div className="left w-full lg:w-6/12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            viewport={{ once: true }}
            className="w-11/12 text-center lg:text-left"
          >
            Dolor sit amet consectetur Quod quibusdam odit voluptatem.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-14 w-full md:w-11/12 text-center lg:text-left "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            quibusdam odit voluptatem. Dolor sit amet consectetur adipisicing
            elit. Quod quibusdam odit voluptatem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start gap-5 mt-14"
          >
            <Button buttonname="Get Started" model="color" />
            <Button buttonname="Learn More" />
          </motion.div>
          <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-10 mt-16 sm:mt-18 ">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium">287K</h3>
              <p className="text-sm">Active Status</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              viewport={{ once: true }}
              className="w-[1px] h-14 shrink-0 bg-gray-800"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium">287K</h3>
              <p className="text-sm">Active Status</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              viewport={{ once: true }}
              className="w-[1px] h-14 shrink-0 bg-gray-800"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium">287K</h3>
              <p className="text-sm">Active Status</p>
            </motion.div>
          </div>
        </div>

        <div className="right grid  w-10/12 sm:w-8/12 lg:w-5/12 grid-cols-4 gap-2 sm:gap-4 ">
          <div className="col-span-2 row-span-2 rounded-4xl  relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-3 absolute top-0 left-0 mt-[-40px] ml-[-30px] z-20 rounded-full"
            >
              <div className="h-[60px] w-[60px] bg-[#db7d1e] rounded-full flex items-center justify-center text-white font-semibold uppercase"></div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              loading="lazy"
              className="w-full h-full object-cover rounded-3xl sm:rounded-4xl"
              src="/profile/1.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-3 rounded-3xl sm:rounded-4xl overflow-hidden  ">
            <motion.img
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              loading="lazy"
              className="w-full h-full object-cover"
              src="/profile/10.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-4xl   relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-2 sm:p-3 absolute top-0 right-0 mt-[35%] sm:mt-[49%] 2xl:mt-[40%] mr-[-170px] sm:mr-[-270px] 2xl:mr-[-380px] z-20 rounded-3xl sm:rounded-4xl"
            >
              <div className=" bg-gray-100 w-[310px] sm:w-[350px] 2xl:w-[400px]  h-[150px] 2xl:h-[200px] rounded-3xl px-5 sm:px-6 py-4">
                <h6 className=" font-semibold">
                  Our 48m clobarate in project teamwork.
                </h6>
                <p className="text-sm mt-4 hidden 2xl:block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repudiandae doloremque consequatur delectus!
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center  ">
                    <img
                      className=" block w-12 h-12 object-cover rounded-full bg-white p-1 shrink-0"
                      src="/profile/1.jpg"
                      alt=""
                    />
                    <img
                      className=" block w-12 h-12 object-cover rounded-full bg-white p-1 ml-[-15px]  shrink-0 "
                      src="/profile/10.jpg"
                      alt=""
                    />
                    <img
                      className=" block w-12 h-12 object-cover rounded-full bg-white p-1 ml-[-15px] shrink-0"
                      src="/profile/3.jpg"
                      alt=""
                    />
                    <img
                      className="  block w-12 h-12 object-cover rounded-full bg-white p-1 ml-[-15px] shrink-0 "
                      src="/profile/9.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-semibold text-gray-600">
                        300+{" "}
                        <span className="font-normal text-[12px]">Revews</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover rounded-3xl sm:rounded-4xl"
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
