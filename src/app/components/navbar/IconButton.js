import React from "react";

function IconButton({ Icon, type = "button", onClick, children, ...rest }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full w-6 h-6"
      type={type}
      onClick={onClick}
      {...rest}
    >
      <Icon width={24} height={24}></Icon>
      {children}
    </button>
  );
}

export default IconButton;
