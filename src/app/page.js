"use client";
import React, { useState, useEffect } from "react";
import { BackgroundImage } from "../../public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBanner } from "./components/AnimatedBanner";

function HomePage() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      // Animate the image to the specified position when the component mounts (initial render)
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <div className="relative h-screen max-w-screen">
      <AnimatedBanner title={"Ordinary by Nature,"} />
      <AnimatedBanner title={"Unique by Choice"} />
      <div className="absolute inset-0 flex justify-center">
        <motion.div
          layoutId="main-image"
          className="absolute w-[200px] h-[300px] lg:w-[400px] lg:h-[600px] -translateX-1/2 -translateY-1/2"
          initial={{ y: 0 }}
          animate={{
            opacity: 1,
            y: 400,
          }}
          transition={{
            duration: 1,
            opacity: { ease: [0.26, 0.63, 0.61, 0.38] },
          }}
        >
          <Image src={BackgroundImage} alt="Background" fill priority />
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
