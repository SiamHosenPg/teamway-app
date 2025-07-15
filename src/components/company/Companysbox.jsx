"use client";
import React from "react";
import { companyData } from "./companydata";
import { motion } from "framer-motion";

const Companysbox = () => {
  return (
    <div className="py-16  bg-gray-50">
      <div className=" flex flex-col lg:flex-row items-center justify-between Pagearea gap-14 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className=" font-medium w-full text-center lg:w-5/12"
        >
          <h2>Our Happy Coustumar</h2>
          <p className="mt-4 sm:mt-6">
            {" "}
            Freedom our 460+ company working our teamwork
          </p>
        </motion.div>

        <div className="  w-11/12 sm:w-10/12 lg:w-7/12  grid grid-cols-3 items-center   justify-between gap-14 sm:gap-20 lg:gap-28 ">
          {companyData &&
            companyData.map((data, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  key={i}
                  className=" w-full aspect-video   flex items-center justify-center shrink-0"
                >
                  <img
                    loading="lazy"
                    className=" w-full object-contain opacity-50 hover:scale-105 transition-transform duration-300"
                    src={data.logo}
                    alt="Company Logo"
                  />
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Companysbox;
