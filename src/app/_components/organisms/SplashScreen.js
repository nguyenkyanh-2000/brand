"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { SplashScreenImage1 } from "../../../../public/images";
import { SplashScreenImage2 } from "../../../../public/images";
import { SplashScreenImage3 } from "../../../../public/images";
import { SplashScreenImage4 } from "../../../../public/images";
import { BackgroundImage } from "../../../../public/images";

const images = [
  SplashScreenImage1,
  SplashScreenImage2,
  SplashScreenImage3,
  SplashScreenImage4,
  BackgroundImage,
];

const SplashScreen = ({ setIsLoading }) => {
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
    }, 1250);

    // Total time to wait for the final image before exit the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentIndex, cycleIndex, setIsLoading]);

  return (
    <div className="relative h-screen w-screen">
      {images.map((imageUrl, index) => (
        <motion.div
          key={index}
          layoutId="hero-image"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[300px] lg:w-[400px] lg:h-[600px]"
          style={{
            zIndex: index === currentIndex ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.25, ease: "easeOut" }}
        >
          {index === currentIndex && (
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              fill
              priority={true}
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SplashScreen;
