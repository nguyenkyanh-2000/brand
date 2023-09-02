import React from "react";

function LongIconButton({
  Icon,
  type = "button",
  iconSize,
  onClick,
  children,
  ...rest
}) {
  return (
    <button
      className="inline-flex w-full h-10 font-secondary items-center rounded-md justify-center ring-1 ring-neutral-600 gap-2 bg-white"
      type={type}
      onClick={onClick}
      {...rest}
    >
      <Icon width={iconSize} height={iconSize}></Icon>
      {children}
    </button>
  );
}

export default LongIconButton;
