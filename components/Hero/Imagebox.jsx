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
      className=" w-4/5  sm:w-2/5 md:w-2/5"
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
