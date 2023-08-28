import React from "react";
import IconButton from "../atoms/button/IconButton";
import { MoonIcon, HeartIcon, CartIcon } from "../../../../public/icons";
import UserHoverCard from "./UserHoverCard";

function NavigationIcons() {
  return (
    <div className="flex items-center justify-center gap-8">
      <IconButton width={24} height={24} Icon={MoonIcon} />
      <IconButton width={24} height={24} Icon={HeartIcon} />
      <IconButton width={24} height={24} Icon={CartIcon} />
      <UserHoverCard />
    </div>
  );
}

export default NavigationIcons;
