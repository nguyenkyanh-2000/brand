"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconButton from "../atoms/button/IconButton";
import { ExitIcon, HamburgerIcon } from "../../../../public/icons";
import WholeScreenSlideIn from "@/app/_components/animation/WholeScreenSlideIn";

function NavMenu({ children }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      {!isMenuOpened ? (
        <div className="flex items-center xl:hidden">
          <IconButton
            width={24}
            height={24}
            Icon={HamburgerIcon}
            onClick={() => setIsMenuOpened(true)}
          />
        </div>
      ) : (
        <AnimatePresence>
          <IconButton width={24} height={24} Icon={HamburgerIcon} />
          <WholeScreenSlideIn isOpen={isMenuOpened}>
            <div className="flex max-w-screen justify-end pt-2">
              <IconButton
                width={24}
                height={24}
                Icon={ExitIcon}
                onClick={() => setIsMenuOpened(false)}
              />
            </div>
            {children}
          </WholeScreenSlideIn>
        </AnimatePresence>
      )}
    </>
  );
}

export default NavMenu;
