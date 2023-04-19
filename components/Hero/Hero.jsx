import React from "react";
import Imagebox from "./Imagebox";
import Article from "./Article";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section className=" h-3/4 flex  flex-col justify-center items-center flex-grow align-top w-2/3 mx-auto mb-28 p-2 space-x-4   ">
      <div className="flex flex-row  my-autp p-2 justify-center align-middle space-x-4">
        <Imagebox />
        <Article />
      </div>
      <Buttons />
    </section>
  );
};

export default Hero;
