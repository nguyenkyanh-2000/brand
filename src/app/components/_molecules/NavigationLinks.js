import React from "react";
import AnimatedUnderlineLink from "../_atoms/link/AnimatedUnderlineLink";

function NavigationLinks() {
  return (
    <div className="flex items-center gap-20">
      <AnimatedUnderlineLink name={"home"} textSize="2xl" to="/" />
      <AnimatedUnderlineLink name={"products"} textSize="2xl" to="/products" />
      <AnimatedUnderlineLink name={"about"} textSize="2xl" to="/about" />
      <AnimatedUnderlineLink name={"contact"} textSize="2xl" to="/contact" />
    </div>
  );
}

export default NavigationLinks;
