"use client";

import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import CustomImage from "./components/_atoms/image/CustomImage";
import { SplashScreenImage1 } from "../../public/images";
import HeroSection from "./components/_organisms/HeroSection";
import NavMenu from "./components/_organisms/NavMenu";
import Header from "./components/_organisms/Header";
import SplashScreen from "./components/_organisms/SplashScreen";

function HomePage() {
  const [isSplashScreenPlayed, setIsSplashScreenPlayed] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useCycle(false, true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splashScreenPlayed =
      typeof window !== "undefined"
        ? window.localStorage.getItem("splashScreenPlayed")
        : null;

    setIsSplashScreenPlayed(Boolean(splashScreenPlayed));

    if (isLoading) {
      window.localStorage.setItem("splashScreenPlayed", true);
    }
  }, [isLoading]);

  return (
    <>
      {isSplashScreenPlayed ? (
        <div className="flex flex-col gap-20 px-16 pt-10 max-sm:px-5">
          <NavMenu
            isMenuOpened={isMenuOpened}
            toggleNavMenu={setIsMenuOpened}
          />
          <Header toggleNavMenu={setIsMenuOpened} />
          <div className="h-screen w-full">
            <HeroSection />
            <div className="relative flex w-full min-h-screen my-20">
              <motion.div
                className="absolute w-1/2 h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <CustomImage
                  src={SplashScreenImage1}
                  width="100%"
                ></CustomImage>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <SplashScreen setIsLoading={setIsLoading} />
      )}
    </>
  );
}

export default HomePage;
