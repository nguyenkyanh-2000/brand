import React from "react";
import { AnimatePresence } from "framer-motion";
import IconButton from "../_atoms/button/IconButton";
import { ExitIcon } from "../../../../public/icons";
import WholeScreenSlideIn from "@/app/animation/WholeScreenSlideIn";
import NavigationIconsBar from "../_molecules/NavigationIconsBar";
import MenuLinks from "../_molecules/MenuLinks";

function NavMenu({ toggleNavMenu, isMenuOpened }) {
  return (
    <AnimatePresence>
      {isMenuOpened && (
        <WholeScreenSlideIn isOpen={isMenuOpened}>
          <div className="flex w-full justify-end pt-2">
            <IconButton
              width={24}
              height={24}
              Icon={ExitIcon}
              onClick={() => toggleNavMenu()}
            />
          </div>
          <MenuLinks />
          <NavigationIconsBar />
        </WholeScreenSlideIn>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;
