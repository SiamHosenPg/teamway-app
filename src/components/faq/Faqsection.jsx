"use client";
import React from "react";
import { motion } from "framer-motion";
import { faqData } from "./faqdata";
import Button from "../button/Button";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const Faqsection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (id) => {
    setActiveIndex((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="Pagearea bg-foreground py-16 sm:py-22 lg:py-24 pb-16 sm:pb-30">
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
          className="text-center text-text-secondary mt-4 mb-0 sm:mb-8 lg:mb-12"
        >
          Got questions? We’ve answered the most common queries about our
          services below. If you still need help, feel free to contact us.
        </motion.p>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 sm:gap-24 py-12 sm:py-20">
          <div className=" w-full lg:w-6/12">
            <div>
              {faqData.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.3 }}
                  viewport={{ once: true }}
                  key={i}
                  className=" p-2 transition-all border-b border-gray-300"
                >
                  <div className="flex items-center py-3 justify-between ">
                    <h6
                      onClick={() => handleToggle(item.id)}
                      className=" font-semibold "
                    >
                      {item.question}
                    </h6>
                    <FaCaretDown
                      onClick={() => handleToggle(item.id)}
                      className={`text-xl duration-300 ${
                        activeIndex === item.id
                          ? " rotate-[-90deg]"
                          : "rotate-0"
                      }`}
                    />
                  </div>

                  <p
                    className={`text-text-secondary transition-all duration-900 text-sm lg:text-base ${
                      activeIndex === item.id
                        ? "h-[100px]  overflow-hidden  "
                        : "h-0 overflow-hidden pb-0 "
                    } `}
                  >
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
            className="w-full lg:w-5/12 bg-background px-10 py-12 rounded-3xl"
          >
            <h3 className="font-bold">
              Didn’t find what you’re looking for? Let’s connect!
            </h3>
            <p className="text-text-secondary mt-4 sm:mt-10 text-sm sm:text-base ">
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
