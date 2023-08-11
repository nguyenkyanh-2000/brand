import React from "react";
import IconButton from "../_atoms/button/IconButton";
import {
  MoonIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
} from "../../../../public/icons";
import AnimatedUnderline from "@/app/animation/AnimatedUnderline";

function NavigationIcons() {
  return (
    <div className="flex items-center justify-center gap-8">
      <IconButton width={24} height={24} Icon={MoonIcon} />
      <IconButton width={24} height={24} Icon={HeartIcon} />
      <IconButton width={24} height={24} Icon={UserIcon} />
      <IconButton width={24} height={24} Icon={CartIcon} />
    </div>
  );
}

export default NavigationIcons;
