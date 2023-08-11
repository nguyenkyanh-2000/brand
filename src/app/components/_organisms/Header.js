import React from "react";
import BrandLogo from "../_atoms/typography/BrandLogo";
import NavigationIconsBar from "../_molecules/NavigationIconsBar";
import NavigationLinks from "../_molecules/NavigationLinks";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="flex w-full h-10 items-center justify-between">
      <BrandLogo />
      <div className="max-xl:hidden">
        <NavigationLinks />
      </div>
      <div className="max-xl:hidden">
        <NavigationIconsBar />
      </div>
      <NavMenu />
    </div>
  );
}

export default Header;
