import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Router from "next/router";
import { useTheme } from '../../context/Theme';

const Buttons = () => {
  const { isDark } = useTheme();


  return (
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
      <Link
        href={
          "https://docs.google.com/document/d/e/2PACX-1vTcTgw8hrDRzvzu_E8qisaA9tea33B6104PnywlrK1SG9tjx1-g8Pwc5yePtsd56BErV8-svFIegFWm/pub"
        }
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={`${isDark ?
            " text-gray-950 hover:text-white  bg-[#e69417] hover:bg-transparent hover:border-[#e69417] hover:border-2 "
            : "dark hover:light  hover:border-gray-800 hover:border-2 "}
           md-max:w-1/2 text-center w-1/4 border-2 border-transparent  font-bold m-1 py-2 px-5 rounded-xl`}
        >
          Resume
        </a>
      </Link>
      <button onClick={() => Router.push('mailto:contact@serkannemli.com')}
        className={` ${isDark ? " border-[#e69417] border-2 hover:border-[#e69417]" : " bg-white text-gray-500 border-1  hover:border-[#867d6f]"} md-max:w-1/2 w-1/4 font-bold m-1 py-2 px-5 rounded-lg`}>
        Contact
      </button>
    </motion.div>
  );
};

export default Buttons;
