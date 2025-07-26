import React from "react";
import Button from "../button/Button";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { testimonialData } from "./testimonialdata";

const Testimonial = () => {
  return (
    <div className="Pagearea">
      <div className=" py-16 sm:py-22 lg:py-32 flex flex-col lg:flex-row items-center gap-12 sm:gap-22 justify-between">
        <div className=" w-full text-center lg:text-left lg:w-[50%]">
          <h2>What Our Customers Say</h2>
          <p className="text-text-secondary mt-5 sm:mt-10 leading-6">
            We value our customers' feedback and strive to provide the best
            service possible. Here are some testimonials from our satisfied
            clients who have experienced our commitment to excellence.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
            <Button buttonname="View more" />
          </div>
        </div>
        <div className=" w-full lg:w-[50%]">
          {testimonialData && testimonialData.length > 0 ? (
            <div className="flex flex-col gap-4 sm:gap-8  items-end  relative">
              {testimonialData.map((testimonial, i) => (
                <div
                  key={i}
                  className={` ${
                    i == 1
                      ? "bg-bghover w-[100%] right-0  border-l-blue-500"
                      : "bg-background w-full sm:w-[86%] right-0 border-l-yellow-500"
                  } flex gap-4 sm:gap-6 right-0  p-4 sm:p-6 rounded-lg border border-border  border-l-6  relative `}
                >
                  <div className="flex-shrink-0 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-foreground border border-foreground ">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>
                  <img
                    className=" absolute z-[0] w-8 right-6 top-4  opacity-20"
                    src="/testimonial.png"
                    alt=""
                  />
                  <div className="relative z-10">
                    <h6 className=" text-base block font-semibold">
                      {testimonial.name}{" "}
                      <BiSolidBadgeCheck className="inline text-blue-500 ml-1" />
                    </h6>
                    <p className="text-[12px] text-text-secondary">
                      {testimonial.position}
                    </p>
                    <p className="mt-2 text-sm text-text-tertiary">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
