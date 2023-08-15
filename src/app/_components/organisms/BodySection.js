import React from "react";
import { motion } from "framer-motion";
import { SplashScreenImage1 } from "../../../../public/images";
import Image from "next/image";
import Banner from "../atoms/typography/Banner";

function BodySection() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-10 lg:gap-20">
      <Banner>
        We curate a unique collection that combines modern aesthetics with
        practicality. Embrace simplicity and elevate your everyday life with
        Brand.
      </Banner>
      <Image
        src={SplashScreenImage1}
        alt="body-image"
        className="w-1/3 object-fit"
      ></Image>
    </div>
  );
}

export default BodySection;
