import React from "react";
import BrandLogo from "../atoms/typography/BrandLogo";
import NavigationIconsBar from "../molecules/NavigationIconsBar";
import NavigationLinks from "../molecules/NavigationLinks";
import SearchDialog from "./SearchDialog";
import NavMenu from "./NavMenu";

const directions = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function Header() {
  return (
    <div className="flex w-full h-10 items-center justify-between">
      <BrandLogo />
      <div className="max-xl:hidden">
        <NavigationLinks directions={directions} />
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
