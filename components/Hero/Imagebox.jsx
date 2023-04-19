import React from "react";
import Image from "next/image";
import myImage from "../../public/image.jpg";
import { motion } from "framer-motion";
import Utils from "../../Utils/index";

const Imagebox = () => {
  const { motions } = Utils;
  return (
    <motion.div
      initial={motions.leftToRight.initial}
      animate={motions.leftToRight.animate}
      className="w-1/3"
    >
      <Image
        className="border-rad"
        objectFit="contain"
        placeholder="blur"
        layout="responsive"
        src={myImage}
        alt="image"
      />
    </motion.div>
  );
};

export default Imagebox;
