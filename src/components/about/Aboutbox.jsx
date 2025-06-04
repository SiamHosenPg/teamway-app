"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Aboutbox = () => {
  return (
    <div className=" pt-20">
      <div className="Pagearea bg-gray-100 py-24 pb-30">
        <div className="flex items-center justify-between gap-20">
          <div className="w-6/12 relative" data-aos="zoom-out-down">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              src="/team.png"
              className=" object-cover  rounded-4xl w-[90%]"
              alt=""
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-4 absolute bottom-[-40px] right-0  rounded-4xl"
            >
              <div className=" bg-white w-[380px] h-[200px] rounded-3xl px-6 py-4">
                <h6 className=" font-semibold">
                  Our 48m clobarate in project teamwork.
                </h6>
                <p className="text-sm mt-4">
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
          </div>
          <div className="w-5/12 ">
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-medium"
            >
              About
            </motion.h5>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Export solution for your Finalcatil Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 w-11/12"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut totam dolorem ratione repellat, tempora velit ullam
              id cupiditate ex pariatur quidem sequi saepe quas, libero commodi
              vel laboriosam quia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5 mt-10"
            >
              <div>
                <IoCheckmarkDoneCircle className="inline text-2xl text-yellow-500" />
                <span className="ml-2 font-medium">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
              <div className="">
                <IoCheckmarkDoneCircle className="inline text-2xl text-yellow-500" />
                <span className="ml-2 font-medium">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
              <div>
                <IoCheckmarkDoneCircle className="inline text-2xl text-yellow-500" />
                <span className="ml-2 font-medium">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
              <div>
                <IoCheckmarkDoneCircle className="inline text-2xl text-yellow-500" />
                <span className="ml-2 font-medium">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
            </motion.div>
            <div className="flex items-center gap-4 mt-14 w-11/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-md w-full  px-6 py-4"
              >
                <h4 className="font-medium">38K</h4>
                <span className="block uppercase text-[12px] font-medium text-gray-600">
                  Project
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-md w-full  px-6 py-4 "
              >
                <h4 className="font-medium">57M</h4>
                <span className="block uppercase text-[12px] font-medium text-gray-600">
                  Total Revenue
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
                className="bg-white rounded-md w-full  px-6 py-4 "
              >
                <h4 className="font-medium">768M +</h4>
                <span className="block uppercase text-[12px] font-medium text-gray-600">
                  Total User
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutbox;
