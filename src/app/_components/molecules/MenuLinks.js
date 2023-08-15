import React from "react";
import AnimatedUnderlineLink from "../atoms/link/AnimatedUnderlineLink";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "Products", to: "#", id: 2 },
  { name: "About", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

const MenuLinks = () => (
  <div className="flex flex-col w-full h-full items-center justify-center flex-grow gap-3">
    {links.map(({ name, to, id }) => (
      <AnimatedUnderlineLink name={name} to={to} key={id} textSize={"4xl"} />
    ))}
  </div>
);

export default MenuLinks;
