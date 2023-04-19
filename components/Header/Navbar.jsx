import React from "react";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const { motions, isOpen } = props;
  return (
    <motion.navbar
      initial={motions.leftToRight.initial}
      animate={motions.leftToRight.animate}
    >
      {props.children}
      <ul
        className={`flex-row-between md:flex md:items-center md:w-auto ${
          isOpen ? "flex-col" : "hidden"
        } `}
      >
        <li>
          <a className="nav-btn" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-btn" href="#aboutme">
            About Me
          </a>
        </li>
        <li>
          <a className="nav-btn" href="#skills">
            Skills and Tools
          </a>
        </li>
        <li>
          <a className="nav-btn" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="nav-btn" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </motion.navbar>
  );
};

export default Navbar;
