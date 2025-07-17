"use client";
import React from "react";
import { companyData } from "./companydata";
import { motion } from "framer-motion";

const Companysbox = () => {
  return (
    <div className="py-16  bg-gray-50">
      <div className=" flex flex-col lg:flex-row items-center justify-between Pagearea gap-14 lg:gap-26">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className=" w-full text-center lg:w-5/12 lg:text-left"
        >
          <h2>Our Happy Customers</h2>
          <p className="mt-4 sm:mt-6 w-full 2xl:w-10/12">
            Trusted by over 460+ companies who rely on our teamwork and
            dedication to achieve real results with freedom and flexibility.
          </p>
        </motion.div>

        <div className="  w-11/12 sm:w-10/12 lg:w-6/12  grid grid-cols-3 items-center   justify-between gap-14 sm:gap-20 lg:gap-28 ">
          {companyData &&
            companyData.map((data, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  key={i}
                  className=" w-full lg:w-[80%] aspect-video   flex items-center justify-center shrink-0"
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
