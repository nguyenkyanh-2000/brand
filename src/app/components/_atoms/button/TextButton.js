import React from "react";

const TextButton = ({
  type = "button",
  onClick,
  label,
  textSize = "base",
  ...rest
}) => {
  return (
    <button
      className={`inline-flex items-center font-primary text-${textSize}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default TextButton;
