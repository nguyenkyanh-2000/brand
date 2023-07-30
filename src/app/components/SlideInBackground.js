import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundImage } from "../../../public/images";

const SlideInBackground = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full -z-50"
      animate={{
        opacity: [0, 1],
        y: ["100%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <div className="relative h-full">
        <Image
          priority={true}
          src={BackgroundImage} // Replace with the image URL
          objectFit="cover"
          alt="Background Image"
        />
      </div>
    </motion.div>
  );
};

export default SlideInBackground;
