import React from "react";
import { motion } from "framer-motion";
import Utils from "../../Utils/index";
import Link from "next/link";
import Router from "next/router";

const Buttons = () => {
  {
    /* First Button color needs to be fixed. @TODO */
  }

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
          className="md-max:w-1/2 text-center w-1/4 border-2 border-transparent bg-[#e69417] hover:bg-transparent hover:border-[#e69417] hover:border-2 hover:text-white text-gray-950    font-bold m-1 py-2 px-5 rounded-xl"
        >
          Resume
        </a>
      </Link>
      <button onClick={() => Router.push('mailto:contact@serkannemli.com')} className=" md-max:w-1/2 w-1/4 border-2 border-gray-800  hover:border-[#e69417] hover:border-2 hover:text-white text-[#e69417] font-bold m-1 py-2 px-5 rounded-lg">
        Contact
      </button>
    </motion.div>
  );
};

export default Buttons;
