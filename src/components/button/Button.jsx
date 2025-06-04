import React from "react";

const Button = ({ buttonname, model }) => {
  return (
    <div
      className={`${
        model == "color"
          ? "bg-yellow-600 border-yellow-600 text-white"
          : "bg-transparent "
      } border px-7 py-3 rounded-full font-medium w-fit`}
    >
      {buttonname}
    </div>
  );
};

export default Button;
