import React from "react";

const Button = ({ buttonname }) => {
  return (
    <div className=" border px-4 py-2 rounded-full font-semibold">
      {buttonname}
    </div>
  );
};

export default Button;
