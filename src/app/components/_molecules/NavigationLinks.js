import AnimatedUnderline from "@/app/animation/AnimatedUnderline";
import React from "react";
import TextButton from "../_atoms/button/TextButton";

function NavigationLinks() {
  return (
    <div className="flex items-center gap-20">
      <AnimatedUnderline>
        <TextButton label={"home"} textSize="2xl" />
      </AnimatedUnderline>
      <AnimatedUnderline>
        <TextButton label={"products"} textSize="2xl" />
      </AnimatedUnderline>
      <AnimatedUnderline>
        <TextButton label={"about"} textSize="2xl" />
      </AnimatedUnderline>
      <AnimatedUnderline>
        <TextButton label={"contact"} textSize="2xl" />
      </AnimatedUnderline>
    </div>
  );
}

export default NavigationLinks;
