import React from "react";
import IconButton from "../_atoms/button/IconButton";
import { HamburgerIcon } from "../../../../public/icons";
import BrandLogo from "../_atoms/typography/BrandLogo";
import NavigationIconsBar from "../_molecules/NavigationIconsBar";
import NavigationLinks from "../_molecules/NavigationLinks";

function Header({ toggleNavMenu }) {
  return (
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
  );
}

export default Header;
