"use client";
import React, { useState, useEffect } from "react";
import { BackgroundImage } from "../../public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBanner } from "./components/_atoms/typography/AnimatedBanner";
import { AnimatedSideBanner } from "./components/_atoms/typography/AnimatedSideBanner";
import { SplashScreenImage1 } from "../../public/images";
import CustomImage from "./components/_atoms/image/CustomImage";

function HomePage() {
  return (
    <div className="h-screen w-full">
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col">
          <AnimatedBanner
            title={"Ordinary by Nature,"}
            layoutId={"main-banner-1"}
          />
          <AnimatedBanner
            title={"Unique by Choice"}
            layoutId={"main-banner-2"}
          />
        </div>

        <div className="flex max-md:flex-col justify-between gap-5 max-md:items-center">
          <AnimatedSideBanner
            className="relative inline-block font-primary lg:text-xl md:text-base font-light"
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
            className="relative inline-block font-primary lg:text-xl md:text-base font-light"
            layoutId={"side-banner-2"}
          />
        </div>
      </div>
      <div className="relative flex w-full min-h-screen my-20">
        <motion.div
          className="absolute w-1/2 h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CustomImage src={SplashScreenImage1} width="100%"></CustomImage>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
