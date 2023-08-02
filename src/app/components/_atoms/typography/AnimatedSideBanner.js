import React from "react";
import FadeIn from "../../../animation/FadeIn";

export const AnimatedSideBanner = ({ title }) => (
  <FadeIn>
    <span className="relative inline-block font-primary  md:text-base lg:text-xl font-light">
      {title}
    </span>
  </FadeIn>
);
