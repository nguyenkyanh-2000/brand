import React from "react";
import IconButton from "../_atoms/button/IconButton";
import TextButton from "../_atoms/button/TextButton";
import {
  MoonIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  HamburgerIcon,
} from "../../../../public/icons";
import SlideIn from "../../animation/SlideIn";
import BrandLogo from "../_atoms/typography/BrandLogo";
import NavigationIconsBar from "../_molecules/NavigationIconsBar";
import NavigationLinks from "../_molecules/NavigationLinks";

function NavBar({ toggleNavMenu }) {
  return (
    <SlideIn direction="down">
      <div className="flex max-w-screen h-10 items-center justify-between">
        <BrandLogo />
        <div className="max-xl:hidden">
          <NavigationLinks />
        </div>
        <div className="max-xl:hidden">
          <NavigationIconsBar />
        </div>
        <div className="flex items-center xl:hidden">
          <IconButton
            width={24}
            height={24}
            Icon={HamburgerIcon}
            onClick={() => toggleNavMenu(true)}
          />
        </div>
      </div>
    </SlideIn>
  );
}

export default NavBar;
