import React from "react";
import Imagebox from "./Imagebox";
import Article from "./Article";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section className="flex-col align-middle w-2/3 m-auto p-2 space-x-4 border-red-500 border-2  ">
      <div className="flex flex-row  m-auto p-2 justify-center align-middle space-x-4">
        <Imagebox />
        <Article />
      </div>
      <Buttons />
    </section>
  );
};

export default Hero;
