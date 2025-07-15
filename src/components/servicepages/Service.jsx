"use client";

import React from "react";
import { servicedata } from "./servicedata";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      <div className="Pagearea py-18 sm:py-26">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          Creative Solutions We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-4 mb-12"
        >
          We provide smart and scalable digital solutions to help your brand
          grow faster and look better online.
        </motion.p>
        <div className=" pt-0 lg:pt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 ">
            {servicedata.map((service, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  key={i}
                  className=" px-4 sm:px-8 py-6 sm:py-12 flex gap-4 sm:gap-6 rounded-lg border border-gray-200 bg-gray-50  hover:bg-blue-50 duration-300 "
                >
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white border border-gray-200 p-4 rounded">
                    <img
                      src={service.image}
                      alt={service.title}
                      className=" block shrink-0  object-cover  rounded"
                    />
                  </div>
                  <div>
                    <b className=" text-base font-semibold mb-2">
                      {service.title}
                    </b>
                    <p className="text-gray-600 text-sm mt-2 sm:mt-4">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
