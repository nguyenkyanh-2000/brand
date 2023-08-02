import React from "react";

const TextButton = ({
  type = "button",
  onClick,
  label,
  textSize = "base",
  textSizeSM,
  textSizeMD,
  textSizeLG,
  textSizeXL,
  ...rest
}) => {
  const textSizes = {
    base: `text-${textSize}`,
    sm: `sm:text-${textSizeSM || textSize}`,
    md: `md:text-${textSizeMD || textSize}`,
    lg: `lg:text-${textSizeLG || textSize}`,
    xl: `xl:text-${textSizeXL || textSize}`,
  };

  return (
    <button
      className={`inline-flex items-center font-primary ${textSizes.base} ${textSizes.sm} ${textSizes.md} ${textSizes.lg} ${textSizes.xl}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default TextButton;
