import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-2 px-6 bg-indigo-500 text-white hover:bg-indigo-600">
      {children}
    </button>
  );
};

export default Button;
