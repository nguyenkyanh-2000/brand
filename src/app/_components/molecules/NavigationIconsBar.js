"use client";

import React from "react";
import UserHoverCard from "./UserHoverCard";
import Link from "next/link";

function NavigationIconsBar({ icons }) {
  return (
    <div className="flex items-center justify-center gap-8">
      {icons.map((icon, index) => (
        <Link href={icon.link} key={index} onClick={icon.onClick}>
          {icon.icon}
        </Link>
      ))}
      <UserHoverCard />
    </div>
  );
}

export default NavigationIconsBar;
