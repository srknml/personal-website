import React from "react";
import Imagebox from "./Imagebox";
import Article from "./Article";
import Buttons from "./Buttons";
import { useTheme } from "../../context/Theme";

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={` ${
        isDark ? "dark" : "light"
      }  md-max:space-y-5 w-full flex  flex-col justify-center items-center flex-grow align-center md:w-2/3 mx-auto p-2 space-y-10`}
    >
      <div className=" md-max:space-y-5 flex flex-col items-center md:flex md:flex-row  my-autp p-2 justify-center align-middle space-x-4">
        <Imagebox />
        <Article />
      </div>
      <Buttons />
    </section>
  );
};

export default Hero;
