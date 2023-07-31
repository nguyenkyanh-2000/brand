"use client";
import React, { useState, useEffect } from "react";
import { BackgroundImage } from "../../public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBanner } from "./components/AnimatedBanner";
import { AnimatedSideBanner } from "./components/AnimatedSideBanner";

function HomePage() {
  const splashScreenPlayed =
    window !== undefined
      ? window.localStorage.getItem("splashScreenPlayed")
      : "";

  return (
    <div className="relative h-screen max-w-screen pt-10">
      <div className="flex flex-col my-20">
        <AnimatedBanner title={"Ordinary by Nature,"} />
        <AnimatedBanner title={"Unique by Choice"} />
      </div>

      <div className="flex max-md:flex-col justify-between gap-5 max-md:items-center">
        <AnimatedSideBanner
          className={
            "relative inline-block font-jost lg:text-xl md:text-base font-light"
          }
          title={"Reimagine your individuality with our products."}
        />
        <motion.div
          layoutId="main-image"
          className=" w-[200px] h-[300px] lg:w-[400px] lg:h-[600px]"
          initial={{
            y: splashScreenPlayed ? null : "-400",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            opacity: { ease: [0.26, 0.63, 0.61, 0.38] },
          }}
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
          className={
            "relative inline-block font-jost lg:text-xl md:text-base font-light"
          }
        />
      </div>
    </div>
  );
}

export default HomePage;
