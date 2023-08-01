"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";
import { SplashScreenImage1 } from "../../../public/images";
import { SplashScreenImage2 } from "../../../public/images";
import { SplashScreenImage3 } from "../../../public/images";
import { SplashScreenImage4 } from "../../../public/images";
import { BackgroundImage } from "../../../public/images";

const images = [
  SplashScreenImage1,
  SplashScreenImage2,
  SplashScreenImage3,
  SplashScreenImage4,
  BackgroundImage,
];

const SplashScreen = ({ setIsLoading }) => {
  console.log("Splash screen rendered");
  const [currentIndex, cycleIndex] = useCycle(
    ...images.map((_, index) => index)
  );

  useEffect(() => {
    // Time to switch between images
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        clearInterval(interval);
      } else {
        cycleIndex();
      }
    }, 1750);

    // Total time to exit the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentIndex, cycleIndex, setIsLoading]);

  return (
    <div className="relative h-screen w-screen">
      {images.map((imageUrl, index) => (
        <AnimatePresence key={index}>
          <motion.div
            layoutId="main-image"
            key={index}
            className="absolute top-1/2 left-1/2 w-[200px] h-[300px] lg:w-[400px] lg:h-[600px]"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
            initial={{ opacity: 1, x: "-50%", y: "-100%" }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x: "-50%",
              y: "-50%",
            }}
            exit={{ opacity: 0, x: "-50%", y: "-50%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {index === currentIndex && (
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                fill
                priority={true}
                sizes=""
              />
            )}
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default SplashScreen;
