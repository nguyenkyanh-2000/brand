import React from "react";
import { motion } from "framer-motion";
import { SplashScreenImage1 } from "../../../../public/images";
import Image from "next/image";

function BodySection() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-10 lg:gap-20">
      <p className="w-full lg:w-2/3  font-primary font-heavy text-2xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl">
        We curate a unique collection that combines modern aesthetics with
        practicality. Embrace simplicity and elevate your everyday life with
        Brand.
      </p>
      <Image
        src={SplashScreenImage1}
        alt="body-image"
        className="w-1/3  object-fitr"
      ></Image>
    </div>
  );
}

export default BodySection;
