import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import src from '../public/image.jpg'

const Switch = ({ isOn, ...rest }) => {
  // initialize the customClassName according to the
  // state of the "isOn" using ternary operator
  const customClassName = `toggleSwitch ${isOn ? "on" : "off"}`;

  // initialize the src according to the
  // state of the "isOn" using ternary operator
  const src = isOn ? "Toggle 1st Image link" : "Toggle 2nd Image link";

  return (
    <motion.div animate className={customClassName} {...rest}>
      <motion.div animate>
        <img src={src} />
      </motion.div>
    </motion.div>
  );
};

const ThemeSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // background-color changes every time "isOn"
    // changes using JavaScript DOM methods
    document.body.style.backgroundColor = isOn ? "#1c1c1c" : "#ffffff";
  }, [isOn]);

  return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
};

export default ThemeSwitch;
