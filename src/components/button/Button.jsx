import React from "react";

const Button = ({ buttonname, model }) => {
  return (
    <div
      className={`${
        model == "color"
          ? "bg-primary border-primary text-white"
          : "bg-transparent "
      } border px-7 py-3 rounded-full font-medium w-fit hover:scale-95 transition-all duration-200`}
    >
      {buttonname}
    </div>
  );
};

export default Button;
