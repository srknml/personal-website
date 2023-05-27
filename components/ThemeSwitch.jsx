import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../public/image.jpg";
import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeProvider, useTheme } from '../context/Theme';


const Switch = ({ isDark, ...rest }) => {
  const customClassName = `toggleSwitch ${isDark ? "on" : "off"} md-max:!w-12 md-max:!h-7`;

  return (
    <motion.div animate className={`${customClassName} `} {...rest}>
      <motion.div animate className="">
        {isDark ? <FiMoon size={18} /> : <FiSun color="orange" size={`14`} />}
      </motion.div>
    </motion.div>
  );
};

const ThemeSwitch = () => {

  const { isDark, toggle } = useTheme();


  return <Switch isDark={isDark} onClick={() => toggle()} />;
};

export default ThemeSwitch;
