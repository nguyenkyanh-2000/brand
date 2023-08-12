"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconButton from "../_atoms/button/IconButton";
import { ExitIcon, HamburgerIcon } from "../../../../public/icons";
import WholeScreenSlideIn from "@/app/animation/WholeScreenSlideIn";
import NavigationIconsBar from "../_molecules/NavigationIconsBar";
import MenuLinks from "../_molecules/MenuLinks";

function NavMenu() {
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
          <WholeScreenSlideIn isOpen={isMenuOpened}>
            <div className="flex w-full justify-end pt-2">
              <IconButton
                width={24}
                height={24}
                Icon={ExitIcon}
                onClick={() => setIsMenuOpened(false)}
              />
            </div>
            <MenuLinks />
            <NavigationIconsBar />
          </WholeScreenSlideIn>
        </AnimatePresence>
      )}
    </>
  );
}

export default NavMenu;
