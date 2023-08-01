import React from "react";

function IconButton({
  Icon,
  type = "button",
  width,
  height,
  onClick,
  ...rest
}) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full"
      type={type}
      onClick={onClick}
      {...rest}
    >
      <Icon width={width} height={height}></Icon>
    </button>
  );
}

export default IconButton;
