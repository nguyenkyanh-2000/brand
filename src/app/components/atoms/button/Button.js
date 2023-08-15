import React from "react";

const Button = ({ text, onClick }) => (
  <button
    className="bg-neutral-50 font-secondary text-neutral-950 px-4 py-2 rounded-full hover:bg-neutral-200 focus:outline-none focus:ring focus:ring-neutral-200"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
