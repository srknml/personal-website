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
      className="socialIcons"
    >
      <SocialIcon
        url="https://www.linkedin.com/in/serkan-nemli-b9a0001b6/"
        fgColor={isDark ? "white" : "black"}
        bgColor="transparent"
        className="socialIcon"
      />
      <SocialIcon
        url="https://github.com/srknml"
        className="socialIcon"
        fgColor={isDark ? "white" : "black"}
        bgColor="transparent"
      />
      <SocialIcon
        // style={{ width: "2rem", height: "2rem" }}
        className="socialIcon"
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
