"use client";
import React from "react";
import { companyData } from "./companydata";
import { motion } from "framer-motion";

const Companysbox = () => {
  return (
    <div className="py-10 pt-20">
      <div className=" ">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center font-medium"
        >
          Freedom our 460+ company working our teamwork
        </motion.h5>
        <div>
          <div className=" Pagearea bg-gray-100 py-10 flex items-center   justify-between gap-5 mt-18 overflow-y-auto">
            {companyData &&
              companyData.map((data, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    key={i}
                    className="    flex items-center justify-center shrink-0 "
                  >
                    <img
                      loading="lazy"
                      className="w-[160px] h-[70px] object-contain opacity-50 hover:scale-105 transition-transform duration-300"
                      src={data.logo}
                      alt="Company Logo"
                    />
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companysbox;
