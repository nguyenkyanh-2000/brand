"use client";
import React, { useState, useEffect } from "react";
import { BackgroundImage } from "../../public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBanner } from "./components/banner/AnimatedBanner";
import { AnimatedSideBanner } from "./components/banner/AnimatedSideBanner";
import { SplashScreenImage1 } from "../../public/images";
import { SplashScreenImage2 } from "../../public/images";
import { SplashScreenImage3 } from "../../public/images";
import { SplashScreenImage4 } from "../../public/images";
import CustomImage from "./components/CustomImage";
import ParallaxScroll from "./components/ParallaxScroll";

function HomePage() {
  const splashScreenPlayed =
    typeof window !== "undefined"
      ? window.localStorage.getItem("splashScreenPlayed")
      : "";

  return (
    <div className="relative min-h-screen max-w-screen pt-10">
      <div className="flex flex-col my-20">
        <AnimatedBanner
          title={"Ordinary by Nature,"}
          layoutId={"main-banner-1"}
        />
        <AnimatedBanner title={"Unique by Choice"} layoutId={"main-banner-2"} />
      </div>

      <div className="flex max-md:flex-col justify-between gap-5 max-md:items-center">
        <AnimatedSideBanner
          className="relative inline-block font-jost lg:text-xl md:text-base font-light"
          title={"Reimagine your individuality with our products."}
          layoutId={"side-banner-1"}
        />

        <motion.div
          layoutId="main-image"
          className="w-[200px] h-[300px] lg:w-[400px] lg:h-[600px]"
          initial={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={BackgroundImage}
            alt="Background"
            width={"100%"}
            height={"100%"}
            objectFit="cover"
            priority
          />
        </motion.div>
        <AnimatedSideBanner
          title={"Reimagine your individuality with our products."}
          className="relative inline-block font-jost lg:text-xl md:text-base font-light"
          layoutId={"side-banner-2"}
        />
      </div>
      <div className="relative flex w-full min-h-screen bg-slate-600 my-20">
        <motion.div
          className="absolute w-1/2 h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CustomImage src={SplashScreenImage1} width="100%"></CustomImage>
        </motion.div>
      </div>
      <ParallaxScroll />
    </div>
  );
}

export default HomePage;
