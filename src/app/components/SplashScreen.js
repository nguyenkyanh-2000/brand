"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

function SplashScreen({ setIsLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutral-50">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          opacity: { ease: [0.26, 0.63, 0.61, 0.38] },
        }}
        className="font-bodoni text-[40px] font-bold text-neutral-950"
      >
        brand.
      </motion.p>
    </div>
  );
}

export default SplashScreen;
