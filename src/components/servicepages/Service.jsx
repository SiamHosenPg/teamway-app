"use client";

import React from "react";
import { servicedata } from "./servicedata";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";

const Service = () => {
  return (
    <div>
      <div className="Pagearea py-26">
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
        <div className=" pt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {servicedata.map((service, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.3 }}
                  viewport={{ once: true }}
                  key={i}
                  className="bg-gray-50 p-8 py-12 rounded-lg border border-gray-200  hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[80px]  object-cover mb-4 rounded"
                  />
                  <h5 className=" font-semibold mb-2">{service.title}</h5>
                  <p className="text-gray-700 mt-4">{service.description}</p>
                  <div className="mt-6">
                    <button className="flex items-center gap-2  transition-colors duration-300">
                      Learn More <FaAngleRight />
                    </button>
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
