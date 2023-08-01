import React, { useState } from "react";
import { motion } from "framer-motion";

export const AnimatedUnderlineLink = ({ name, to, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <a
        className="font-jost max-sm:text-4xl text-8xl relative z-10"
        href={to}
        key={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
      </a>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-black z-0"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }} // Animate underline from left to right on hover
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};
