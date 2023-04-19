import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

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

const SocialIcons = ({ motions }) => {
  return (
    <motion.div
      initial={motions.rightToLeft.initial}
      animate={motions.rightToLeft.animate}
      className="flex-row-between min-h-max  md:flex md:justify-between"
    >
      <SocialIcon
        url="https://www.linkedin.com/in/serkan-nemli-b9a0001b6/"
        fgColor="white"
        bgColor="transparent"
        className="cursor-pointer"
        o
      />
      <SocialIcon
        url="https://github.com/srknml"
        className="cursor-pointer"
        fgColor="white"
        bgColor="transparent"
      />
      <SocialIcon
        className="cursor-pointer"
        network="email"
        url="mailto:contact@serkannemli.com"
        fgColor="white"
        bgColor="transparent"
      />
    </motion.div>
  );
};

export default SocialIcons;
