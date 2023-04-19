import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <header
      className={`flex-row-between sticky top-0 items-center max-w-8xl mx-auto z-20 md:items-start p-5 ${
        isOpen ? "border-b-orange-500 border-b-2 bg-gray-900" : "bg-inherit "
      }`}
    >
      {/* tailwind border-bottom 2px white */}
      {/* b */}
      <motion.navbar
        className=""
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,

          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
      >
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-white hover:text-white"
          >
            <svg
              className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <ul
          className={`flex-row-between md:flex md:items-center md:w-auto ${
            isOpen ? "flex-col" : "hidden"
          } `}
        >
          <li>
            <a className="nav-btn" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-btn" href="#aboutme">
              About Me
            </a>
          </li>
          <li>
            <a className="nav-btn" href="#skills">
              Skills and Tools
            </a>
          </li>
          <li>
            <a className="nav-btn" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="nav-btn" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </motion.navbar>

      {/* <Navbar /> */}

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,

          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="flex-row-between min-h-max  md:flex md:justify-between"
      >
        <SocialIcon
          url="https://linkedin.com/jaketrent"
          fgColor="white"
          bgColor="transparent"
          className="cursor-pointer"
          o
        />
        <SocialIcon
          url="https://github.com/srknml"
          className="cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="mailto:contact@serkannemli.com"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
};

export default Header;
