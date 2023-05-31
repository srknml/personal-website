import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import ThemeSwitch from "../ThemeSwitch";

const items = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/serkan-nemli-b9a0001b6/",
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/srknml",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:contact@serkannemli.com",
  },
];

const SocialIcons = ({ motions, isDark }) => {
  return (
    <motion.div
      initial={motions.rightToLeft.initial}
      animate={motions.rightToLeft.animate}
      className="flex-row-between justify-between items-center min-h-max  md:flex md:justify-between md:items-center"
    >
      <SocialIcon
        url="https://www.linkedin.com/in/serkan-nemli-b9a0001b6/"
        fgColor={isDark ? "white" : "black"}
        bgColor="transparent"
        className="cursor-pointer md-max:!w-10 md-max:!h-10"
      />
      <SocialIcon
        url="https://github.com/srknml"
        className="cursor-pointer md-max:!w-10 md-max:!h-10"
        fgColor={isDark ? "white" : "black"}
        bgColor="transparent"
      />
      <SocialIcon
        // style={{ width: "2rem", height: "2rem" }}
        className="cursor-pointer md-max:!w-10 md-max:!h-10"
        network="email"
        url="mailto:contact@serkannemli.com"
        fgColor={isDark ? "white" : "black"}
        bgColor="transparent"
      />
      <ThemeSwitch />
    </motion.div>
  );
};

export default SocialIcons;
