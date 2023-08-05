import React from "react";
import { AnimatedBanner } from "../_atoms/typography/AnimatedBanner";
import { AnimatedSideBanner } from "../_atoms/typography/AnimatedSideBanner";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundImage } from "../../../../public/images";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-20">
      <div className="flex flex-col">
        <AnimatedBanner title={"Ordinary by Nature,"} />
        <AnimatedBanner title={"Unique by Choice"} />
      </div>

      <div className="flex max-md:flex-col justify-between gap-5 max-md:items-center">
        <AnimatedSideBanner
          title={"Reimagine your individuality with our products."}
        />
        <motion.div
          // layoutId to link with image from the Splash Screen
          layoutId="hero-image"
          className="w-[200px] h-[300px] lg:w-[400px] lg:h-[600px]"
          transition={{ duration: 1.25, ease: "easeInOut" }}
        >
          <Image
            src={BackgroundImage}
            alt="Background"
            width={"100%"}
            height={"100%"}
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
            priority
          />
        </motion.div>
        <AnimatedSideBanner
          title={"Reimagine your individuality with our products."}
        />
      </div>
    </div>
  );
};

export default HeroSection;
