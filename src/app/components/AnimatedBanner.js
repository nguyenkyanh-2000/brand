"use client";

import { motion } from "framer-motion";

const animation = {
  initial: { y: 50 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
};

export const AnimatedBanner = ({ title, disabled }) => (
  <div className="overflow-hidden flex">
    <motion.span
      className="relative inline-block whitespace-nowrap font-jost text-8xl max-sm:text-4xl max-lg:text-6xl font-semibold -my-1"
      variants={disabled ? null : animation}
      initial="initial"
      animate="animate"
    >
      {title}
    </motion.span>
  </div>
);
