"use client";

import { motion } from "framer-motion";

const animation = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export const AnimatedSideBanner = ({ title, disabled, className }) => (
  <div className="overflow-hidden flex">
    <motion.span
      className={className}
      variants={disabled ? null : animation}
      initial="initial"
      animate="animate"
    >
      {title}
    </motion.span>
  </div>
);
