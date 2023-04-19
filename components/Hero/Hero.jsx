import React from "react";
import Image from "next/image";
import myImage from "../../public/image.jpg";
import { motion } from "framer-motion";
import Utils from "../../Utils/index";

// how to use static image in nextjs
// https://nextjs.org/docs/basic-features/image-optimization

const Hero = () => {
  const { motions } = Utils;
  return (
    <section className="flex-col align-middle w-2/3 m-auto p-2 space-x-4 border-red-500 border-2  ">
      <div className="flex flex-row  m-auto p-2 justify-center align-middle space-x-4">
        <motion.div
          initial={motions.leftToRight.initial}
          animate={motions.leftToRight.animate}
          className="w-1/3"
        >
          <Image
            className="border-rad"
            objectFit="contain"
            src={myImage}
            alt="image"
          />
        </motion.div>

        <motion.article
          initial={motions.rightToLeft.initial}
          animate={motions.rightToLeft.animate}
          className="w-2/3 border-l-slate-200 h-full border-l-2 p-2  flex flex-col items-start "
        >
          <h1 className="text-4xl font-bold">Hero Title</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            accusantium quas quidem nemo voluptatum. Quisquam, quae. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            accusantium quas quidem nemo voluptatum. Quisquam, quae.
          </p>
        </motion.article>
      </div>
      {/* First Button color needs to be fixed. @TODO */}
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="flex flex-row justify-center p-2 w-full mx-auto  "
      >
        <button className=" w-1/4 border-2 border-transparent bg-[#e69417] hover:bg-transparent hover:border-[#e69417] hover:border-2 hover:text-white text-gray-950    font-bold m-1 py-2 px-5 rounded-xl">
          Button
        </button>
        <button className=" w-1/4 border-2 border-gray-800  hover:border-[#e69417] hover:border-2 hover:text-white text-[#e69417] font-bold m-1 py-2 px-5 rounded-lg">
          Button
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
