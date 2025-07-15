"use client";
import React from "react";
import { motion } from "framer-motion";
import { faqData } from "./faqdata";
import Button from "../button/Button";
import { FaCaretDown } from "react-icons/fa";

const Faqsection = () => {
  return (
    <div>
      <div className="Pagearea bg-gray-100 py-24 pb-30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-4 mb-12"
        >
          Got questions? We’ve answered the most common queries about our
          services below. If you still need help, feel free to contact us.
        </motion.p>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-24 py-20">
          <div className=" w-full lg:w-6/12">
            <div>
              {faqData.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.3 }}
                  viewport={{ once: true }}
                  key={i}
                  className=" p-2  border-b border-gray-600"
                >
                  <div className="flex items-center py-3 justify-between ">
                    <h6 className="text-lg font-semibold ">{item.question}</h6>
                    <FaCaretDown className="text-xl" />
                  </div>
                  <p className="text-gray-700 py-4 pb-8 hidden ">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 bg-white px-10 py-12 rounded-3xl"
          >
            <h3 className="font-bold">
              Didn’t find what you’re looking for? <br /> Let’s connect!
            </h3>
            <p className="text-gray-600 mt-10 ">
              Couldn’t find the answer you need? No problem — our team is here
              to help. Just reach out with your question, and we’ll get back to
              you as soon as possible. We’re always happy to connect and assist
              you.
            </p>
            <div className="mt-10">
              <Button buttonname="Contucts" model="color" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
