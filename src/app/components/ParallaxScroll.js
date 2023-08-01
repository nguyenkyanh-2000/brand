"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ParallaxScroll = () => {
  const scrollY = useMotionValue(0);
  const translateY = useTransform(scrollY, [0, -500], [0, 500]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div>
      <motion.div
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            y: translateY,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "blue",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "red",
              borderRadius: "50%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              width: "200px",
              height: "200px",
            }}
          />
        </motion.div>
      </motion.div>

      <div style={{ height: "200vh", background: "lightgrey" }}>
        Scroll down to see the parallax effect!
      </div>
    </div>
  );
};

export default ParallaxScroll;
