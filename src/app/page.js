"use client";

import React, { useEffect, useState } from "react";
import { useCycle } from "framer-motion";
import HeroSection from "./components/_organisms/HeroSection";
import NavMenu from "./components/_organisms/NavMenu";
import Header from "./components/_organisms/Header";
import SplashScreen from "./components/_organisms/SplashScreen";
import BodySection from "./components/_organisms/BodySection";
import SlideIn from "./animation/SlideIn";

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
        <div className="flex flex-col w-screen gap-20 px-16 pt-10 max-sm:px-5">
          <SlideIn direction="down">
            <Header />
          </SlideIn>
          <HeroSection isSplashScreenPlayed={isSplashScreenPlayed} />
          <BodySection />
        </div>
      ) : (
        <SplashScreen setIsLoading={setIsLoading} />
      )}
    </>
  );
}

export default HomePage;
