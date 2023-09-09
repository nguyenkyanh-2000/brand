import React from "react";
import AnimatedUnderlineLink from "../atoms/link/AnimatedUnderlineLink";

const MenuLinks = ({ directions }) => (
  <div className="flex flex-col w-full h-full items-center justify-center flex-grow gap-3">
    {directions.map((direction, index) => (
      <AnimatedUnderlineLink
        key={index}
        name={direction.name}
        to={direction.to}
        textSize={"4xl"}
      />
    ))}
  </div>
);

export default MenuLinks;
