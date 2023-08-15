"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "./_components/organisms/HeroSection";
import Header from "./_components/organisms/Header";
import SplashScreen from "./_components/organisms/SplashScreen";
import BodySection from "./_components/organisms/BodySection";
import SlideIn from "./_components/animation/SlideIn";

function HomePage() {
  const [isSplashScreenPlayed, setIsSplashScreenPlayed] = useState(false);
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
