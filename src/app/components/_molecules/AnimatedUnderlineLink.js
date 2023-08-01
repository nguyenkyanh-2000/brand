import React, { useState } from "react";
import Link from "next/link";
import AnimatedUnderline from "../_atoms/animation/AnimatedUnderline";

const AnimatedUnderlineLink = ({ name, to, textSize, ...rest }) => {
  return (
    <AnimatedUnderline>
      <Link href={to} className={`font-primary text-${textSize}`} {...rest}>
        {name}
      </Link>
    </AnimatedUnderline>
  );
};

export default AnimatedUnderlineLink;
