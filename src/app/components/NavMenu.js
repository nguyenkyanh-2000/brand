import React from "react";
import IconButton from "./navbar/IconButton";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon } from "../../../public/icons";
import { HeartIcon } from "../../../public/icons";
import { UserIcon } from "../../../public/icons";
import { CartIcon } from "../../../public/icons";
import { ExitIcon } from "../../../public/icons";

const links = [
  { name: "home", to: "#", id: 1 },
  { name: "products", to: "#", id: 2 },
  { name: "about", to: "#", id: 3 },
  { name: "contact", to: "#", id: 4 },
];

const icons = [
  { icon: <MoonIcon />, to: "#", id: 1 },
  { icon: <HeartIcon />, to: "#", id: 2 },
  { icon: <UserIcon />, to: "#", id: 3 },
  { icon: <CartIcon />, to: "#", id: 4 },
];

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 1000,
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

function NavMenu({ toggleNavMenu, isMenuOpened }) {
  return (
    <AnimatePresence>
      {isMenuOpened && (
        <motion.aside
          initial={"closed"}
          animate={isMenuOpened ? "open" : "closed"}
          exit={"closed"}
          variants={variants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute flex flex-col top-0 left-0 px-16 pt-10 max-sm:px-5 w-full min-h-full bg-neutral-50 z-50"
        >
          <div className="flex w-full justify-end pt-2">
            <IconButton
              Icon={ExitIcon}
              onClick={() => toggleNavMenu()}
            ></IconButton>
          </div>
          <div className="flex flex-col w-full h-full items-center justify-center flex-grow gap-3">
            {links.map(({ name, to, id }) => (
              <motion.a
                className="font-jost max-sm:text-4xl text-8xl hover:underline"
                key={id}
                href={to}
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                {name}
              </motion.a>
            ))}
          </div>
          <div className={"flex w-full justify-center gap-10 my-10"}>
            {icons.map(({ icon, to, id }) => (
              <motion.a
                key={id}
                href={to}
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;
