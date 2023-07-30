"use client";

import { motion, useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

import NavBar from "./components/navbar/NavBar";
import NavMenu from "./components/NavMenu";
import SplashScreen from "./components/SplashScreen";
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
          <>
            <div className="px-16 w-screen min-h-screen max-sm:px-5 ">
              <NavMenu
                isMenuOpened={isMenuOpened}
                toggleNavMenu={setIsMenuOpened}
              />
              <NavBar toggleNavMenu={setIsMenuOpened} />
              {children}
            </div>
          </>
        )}
      </body>
    </html>
  );
}
