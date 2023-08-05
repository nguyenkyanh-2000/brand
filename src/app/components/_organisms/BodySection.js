import React from "react";
import { motion } from "framer-motion";
import { SplashScreenImage1 } from "../../../../public/images";
import Image from "next/image";

function BodySection() {
  return (
    <div className="relative flex w-full min-h-screen my-20">
      <motion.div
        className="absolute w-1/2 h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={SplashScreenImage1} alt="body-image" />
      </motion.div>
    </div>
  );
}

export default BodySection;
