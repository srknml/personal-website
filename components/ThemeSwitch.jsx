import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../public/image.jpg";
import Image from "next/image";
import { FaAws, FaReact, FaHtml5 } from "react-icons/fa";
const Switch = ({ isOn, ...rest }) => {
  // initialize the customClassName according to the
  // state of the "isOn" using ternary operator
  const customClassName = `toggleSwitch ${isOn ? "on" : "off"}`;

  // initialize the src according to the
  // state of the "isOn" using ternary operator

  return (
    <motion.div animate className={`${customClassName} `} {...rest}>
      <motion.div animate className="flex flex-row justify-center">
        <Image src={isOn ? image : image} alt={"asd"} />
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
