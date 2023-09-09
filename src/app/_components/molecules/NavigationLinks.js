import React from "react";
import AnimatedUnderlineLink from "../atoms/link/AnimatedUnderlineLink";

function NavigationLinks({ directions }) {
  return (
    <div className="flex items-center gap-20">
      {directions.map((direction, index) => (
        <AnimatedUnderlineLink
          key={index}
          name={direction.name}
          textSize={`[20px]`}
          to={direction.to}
        />
      ))}
    </div>
  );
}

export default NavigationLinks;
