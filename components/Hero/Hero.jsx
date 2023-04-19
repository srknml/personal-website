import React from "react";
import Imagebox from "./Imagebox";
import Article from "./Article";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section className="md-max:space-y-5 w-full h-3/4 flex  flex-col justify-center items-center flex-grow align-top md:w-2/3 mx-auto mb-28 p-2 space-x-4   ">
      <div className=" md-max:space-y-5 flex flex-col items-center md:flex md:flex-row  my-autp p-2 justify-center align-middle space-x-4">
        <Imagebox />
        <Article />
      </div>
      <Buttons />
    </section>
  );
};

export default Hero;
