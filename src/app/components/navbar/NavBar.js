import React from "react";
import IconButton from "./IconButton";
import TextButton from "./TextButton";
import { easeIn, motion } from "framer-motion";
import { MoonIcon } from "../../../../public/icons";
import { HeartIcon } from "../../../../public/icons";
import { UserIcon } from "../../../../public/icons";
import { CartIcon } from "../../../../public/icons";
import { HamburgerIcon } from "../../../../public/icons";

function NavBar({ toggleNavMenu }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeIn }}
    >
      <div className="flex max-w-full h-10 items-center justify-between my-10">
        <p className="font-bodoni font-bold text-[40px] max-sm:text-3xl">
          brand.
        </p>
        <div className="flex h-full gap-20 max-xl:hidden">
          <TextButton>home</TextButton>
          <TextButton>products</TextButton>
          <TextButton>about</TextButton>
          <TextButton>contact</TextButton>
        </div>
        <div className="flex items-center h-full gap-8 max-xl:hidden">
          <IconButton Icon={MoonIcon} />
          <IconButton Icon={HeartIcon} />
          <IconButton Icon={UserIcon} />
          <IconButton Icon={CartIcon} />
        </div>
        <div className="flex items-center xl:hidden">
          <IconButton
            Icon={HamburgerIcon}
            onClick={() => toggleNavMenu(true)}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default NavBar;
