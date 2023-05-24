import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../public/image.jpg";
import Image from "next/image";
const Switch = ({ isOn, ...rest }) => {
  const customClassName = `toggleSwitch ${isOn ? "on" : "off"}`;

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
    document.body.style.backgroundColor = isOn ? "#1c1c1c" : "#ffffff";
  }, [isOn]);

  return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
};

export default ThemeSwitch;
