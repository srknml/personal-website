import React from "react";
import { motion } from "framer-motion";
import Utils from "../../Utils/index";

const Article = () => {
  const { motions } = Utils;
  return (
    <motion.article
      initial={motions.rightToLeft.initial}
      animate={motions.rightToLeft.animate}
      className="md-max:border-t-gray-500 md-max:mt-3 md-max:border-t-2 w-full md:w-2/3 h-full md:border-l-gray-500 border-opacity-30  md:border-l-2 p-2  space-y-2  flex flex-col items-start "
    >
      <h1 className="text-4xl font-bold block w-full text-center">
        Hero Title
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptates quae voluptatibus quibusdam
        accusantium quas quidem nemo voluptatum. Quisquam, quae. Quisquam
        voluptate, quod, quia, voluptates quae voluptatibuadadaada asdad asda
        asdas
      </p>
    </motion.article>
  );
};

export default Article;
