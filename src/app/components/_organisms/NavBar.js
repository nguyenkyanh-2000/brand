import React from "react";
import IconButton from "../_atoms/button/IconButton";
import TextButton from "../_atoms/button/TextButton";
import { motion } from "framer-motion";
import { MoonIcon } from "../../../../public/icons";
import { HeartIcon } from "../../../../public/icons";
import { UserIcon } from "../../../../public/icons";
import { CartIcon } from "../../../../public/icons";
import { HamburgerIcon } from "../../../../public/icons";

function NavBar({ toggleNavMenu }) {
  return (
    <motion.div
      className="flex max-w-full h-10 items-center justify-between overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="font-accent font-bold text-[40px] max-sm:text-3xl">
        brand.
      </p>
      <div className="flex h-full gap-20 max-xl:hidden">
        <TextButton label={"home"} textSize="2xl" />
        <TextButton label={"products"} textSize="2xl" />
        <TextButton label={"about"} textSize="2xl" />
        <TextButton label={"contact"} textSize="2xl" />
      </div>
      <div className="flex items-center h-full gap-8 max-xl:hidden">
        <IconButton width={24} height={24} Icon={MoonIcon} />
        <IconButton width={24} height={24} Icon={HeartIcon} />
        <IconButton width={24} height={24} Icon={UserIcon} />
        <IconButton width={24} height={24} Icon={CartIcon} />
      </div>
      <div className="flex items-center xl:hidden">
        <IconButton
          width={24}
          height={24}
          Icon={HamburgerIcon}
          onClick={() => toggleNavMenu(true)}
        />
      </div>
    </motion.div>
  );
}

export default NavBar;
