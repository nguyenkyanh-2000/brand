"use client";

import { useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";

import NavBar from "./components/_organisms/NavBar";
import NavMenu from "./components/_organisms/NavMenu";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const splashScreenPlayed =
    window !== undefined
      ? window.localStorage.getItem("splashScreenPlayed")
      : "";

  const [isLoading, setIsLoading] = useState(isHomePage);
  const [isMenuOpened, setIsMenuOpened] = useCycle(false, true);

  useEffect(() => {
    if (isLoading) {
      window.localStorage.setItem("splashScreenPlayed", true);
      return;
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-neutral-50">
        {isLoading && isHomePage && !splashScreenPlayed ? (
          <SplashScreen setIsLoading={setIsLoading} />
        ) : (
          <div className="px-16 pt-10 max-sm:px-5">
            <NavMenu
              isMenuOpened={isMenuOpened}
              toggleNavMenu={setIsMenuOpened}
            />
            <NavBar toggleNavMenu={setIsMenuOpened} />
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
