"use client";
import React from "react";
import { companyData } from "./companydata";
import { motion } from "framer-motion";

const Companysbox = () => {
  return (
    <div className="py-10  bg-red-50">
      <div className=" flex items-center justify-between Pagearea gap-16">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className=" font-medium w-5/12"
        >
          Freedom our 460+ company working our teamwork
        </motion.h5>

        <div className="  w-7/12  grid grid-cols-3 items-center   justify-between gap-22 ">
          {companyData &&
            companyData.map((data, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  key={i}
                  className=" w-full h-[100px]   flex items-center justify-center shrink-0"
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
