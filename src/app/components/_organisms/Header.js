import React from "react";
import BrandLogo from "../_atoms/typography/BrandLogo";
import NavigationIconsBar from "../_molecules/NavigationIconsBar";
import NavigationLinks from "../_molecules/NavigationLinks";
import SearchDialog from "./SearchDialog";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="flex w-full h-10 items-center justify-between">
      <BrandLogo />
      <div className="max-xl:hidden">
        <NavigationLinks />
      </div>
      <div className="flex max-xl:hidden gap-8">
        <SearchDialog />
        <NavigationIconsBar />
      </div>
      <div className="hidden max-xl:flex gap-8">
        <SearchDialog />
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;
