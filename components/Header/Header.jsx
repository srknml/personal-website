import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex-row-between sticky top-0 items-center max-w-6xl mx-auto z-20 l:items-center p-5 ">
      <motion.navbar
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,

          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
      >
        <ul className="flex-row-between">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </motion.navbar>

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,

          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="flex-row-between"
      >
        <SocialIcon
          url="https://linkedin.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <SocialIcon
          url="https://github.com/srknml"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="mailto:contact@serkannemli.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
};

export default Header;
