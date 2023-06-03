import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Routes = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Skills and Tools",
    path: "#skills",
  },
  {
    name: "Experiences",
    path: "#experiences",
  },
  {
    name: "Education",
    path: "#education",
  },
];

const Navbar = (props) => {
  const { motions, isOpen, setIsOpen } = props;
  return (
    <motion.navbar
      initial={motions.leftToRight.initial}
      animate={motions.leftToRight.animate}
    >
      {props.children}
      <ul
        className={` ${
          props.isDark ? "dark" : "light"
        } flex-row-between md:flex md:items-center md:w-auto ${
          isOpen ? "flex-col" : "hidden"
        }  `}
      >
        {Routes.map((route) => {
          return (
            <Link href={route.path} key={route.name}>
              <a onClick={() => setIsOpen(false)} className="nav-btn">
                {" "}
                {route.name}{" "}
              </a>
            </Link>
          );
        })}
      </ul>
    </motion.navbar>
  );
};

export default Navbar;
