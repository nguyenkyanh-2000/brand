import React from "react";
import AnimatedUnderlineLink from "../atoms/link/AnimatedUnderlineLink";

function NavigationLinks() {
  return (
    <div className="flex items-center gap-20">
      <AnimatedUnderlineLink name={"Home"} textSize="2xl" to="/" />
      <AnimatedUnderlineLink name={"Products"} textSize="2xl" to="/products" />
      <AnimatedUnderlineLink name={"About"} textSize="2xl" to="/about" />
      <AnimatedUnderlineLink name={"Contact"} textSize="2xl" to="/contact" />
    </div>
  );
}

export default NavigationLinks;
