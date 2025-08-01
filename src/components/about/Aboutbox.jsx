"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Aboutbox = () => {
  return (
    <div className=" pt-0 lg:pt-20">
      <div className="Pagearea bg-foreground py-24 pb-30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div
            className=" w-11/12 sm:w-10/12 lg:w-6/12 relative"
            data-aos="zoom-out-down"
          >
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
              className="bg-foreground p-2 sm:p-4 absolute bottom-[-40px] right-0  rounded-4xl "
            >
              <div className=" bg-background w-[290px] sm:w-[380px] h-[140px] sm:h-[200px] lg:h-[220px] rounded-3xl px-4 sm:px-6 py-3 sm:py-4">
                <h6 className=" font-semibold">
                  Clients love working with Teamway
                </h6>
                <p className=" hidden sm:block text-sm mt-4 text-text-secondary">
                  Our commitment to quality, communication, and results has
                  earned us lasting relationships and 5-star feedback from
                  clients around the world.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center  ">
                    <img
                      className=" block w-12 h-12 object-cover rounded-full bg-foreground p-1 shrink-0"
                      src="/profile/1.jpg"
                      alt=""
                    />
                    <img
                      className=" block w-12 h-12 object-cover rounded-full bg-foreground p-1 ml-[-15px]  shrink-0 "
                      src="/profile/10.jpg"
                      alt=""
                    />
                    <img
                      className=" block w-12 h-12 object-cover rounded-full bg-foreground p-1 ml-[-15px] shrink-0"
                      src="/profile/3.jpg"
                      alt=""
                    />
                    <img
                      className="  block w-12 h-12 object-cover rounded-full bg-foreground p-1 ml-[-15px] shrink-0 "
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
                      <span className="text-sm font-semibold text-text-tertiary">
                        300+{" "}
                        <span className="font-normal text-[12px]">Revews</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" w-full lg:w-5/12 ">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              Discover the Story Behind Teamway Your Trusted Digital Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className=" mt-6 lg:mt-10 text-text-secondary w-full lg:w-11/12 text-center lg:text-left"
            >
              Teamway is a dedicated service agency focused on delivering
              innovative digital solutions that empower businesses to thrive.
              With a skilled team and customer-centric approach, we turn ideas
              into impactful results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-5 mt-10"
            >
              <div>
                <IoCheckmarkDoneCircle className="inline text-2xl text-green-600" />
                <span className="ml-2 text-sm font-medium">
                  Skilled and Experienced Professionals
                </span>
              </div>
              <div className="">
                <IoCheckmarkDoneCircle className="inline text-2xl text-green-600" />
                <span className="ml-2 text-sm font-medium">
                  Collaborative and Team-Oriented
                </span>
              </div>
              <div>
                <IoCheckmarkDoneCircle className="inline text-2xl text-green-600" />
                <span className="ml-2 text-sm font-medium">
                  Innovative and Creative Thinkers
                </span>
              </div>
              <div>
                <IoCheckmarkDoneCircle className="inline text-2xl text-green-600" />
                <span className="ml-2 text-sm font-medium">
                  Reliable and Committed
                </span>
              </div>
            </motion.div>
            <div className="flex items-center gap-4 mt-14 w-12/12 sm:w-9/12 2xl:w-8/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="  w-2/6 border-r border-l pl-4 border-border"
              >
                <h4 className="font-semibold">
                  38<span className="text-lg">K</span>
                </h4>
                <span className="block uppercase text-[12px] font-medium text-text-secondary">
                  Project
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="  w-2/6  border-r border-border "
              >
                <h4 className="font-semibold">
                  57<span className="text-lg">M</span>
                </h4>
                <span className="block uppercase text-[12px] font-medium text-text-secondary">
                  Total Revenue
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
                className="  w-2/6   "
              >
                <h4 className="font-semibold">
                  76<span className="text-lg">M</span>
                </h4>
                <span className="block uppercase text-[12px] font-medium text-text-secondary">
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
