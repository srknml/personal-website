import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import ThemeSwitch from "../ThemeSwitch";
import SocialIconsData from "../../public/SocialIcons.json";

const SocialIcons = ({ motions, isDark }) => {
  console.log(SocialIconsData);
  return (
    <motion.div
      initial={motions.rightToLeft.initial}
      animate={motions.rightToLeft.animate}
      className="socialIcons"
    >
      {SocialIconsData &&
        SocialIconsData.map((data, index) => {
          return (
            <SocialIcon
              key={index}
              url={data.url}
              network={data.network}
              fgColor={isDark ? "white" : "black"}
              bgColor="transparent"
              rel="noopener noreferrer"
              target="_blank"
              className="socialIcon"
            />
          );
        })}
      <ThemeSwitch />
    </motion.div>
  );
};

export default SocialIcons;
