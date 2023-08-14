import React from "react";
import Link from "next/link";
import AnimatedUnderline from "../../animation/AnimatedUnderline";

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
