"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "./_components/organisms/HeroSection";
import Header from "./_components/organisms/Header";
import SplashScreen from "./_components/organisms/SplashScreen";
import BodySection from "./_components/organisms/BodySection";
import SlideIn from "./_components/animation/SlideIn";
import Footer from "./_components/organisms/Footer";
import NavigationLinks from "./_components/molecules/NavigationLinks";
import SearchDialog from "./_components/organisms/SearchDialog";
import NavigationIconsBar from "./_components/molecules/NavigationIconsBar";
import NavMenu from "./_components/molecules/NavMenu";
import { CartIcon } from "../../public/icons";
import { MoonIcon } from "../../public/icons";

const directions = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const icons = [{ icon: <CartIcon width={24} height={24} />, link: "#" }];

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
        <div className="flex flex-col gap-20">
          <div className="flex flex-col w-screen gap-20 px-16 pt-10 max-sm:px-5">
            <SlideIn direction="down">
              <Header>
                <div className="max-xl:hidden">
                  <NavigationLinks directions={directions} />
                </div>
                <div className="flex max-xl:hidden gap-8">
                  <SearchDialog />
                  <NavigationIconsBar icons={icons} />
                </div>
                <div className="hidden max-xl:flex gap-8">
                  <SearchDialog />
                  <NavMenu>
                    <NavigationIconsBar icons={icons} />
                  </NavMenu>
                </div>
              </Header>
            </SlideIn>
            <HeroSection isSplashScreenPlayed={isSplashScreenPlayed} />
            <BodySection />
          </div>
          <Footer />
        </div>
      ) : (
        <SplashScreen setIsLoading={setIsLoading} />
      )}
    </>
  );
}

export default HomePage;
