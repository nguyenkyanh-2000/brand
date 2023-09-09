import React from "react";
import BrandLogo from "../atoms/typography/BrandLogo";

function Header({ children }) {
  return (
    <div className="flex w-full h-10 items-center justify-between">
      <BrandLogo />
      {children}
    </div>
  );
}

export default Header;
