import React from "react";
import { motion, useInView } from "framer-motion";
// import Ticker from "./Ticker";
import Ticker from "framer-motion-ticker";

const Slide = ({ title, colors, direction, duration }) => {
  // const isInView = useInView(scope);
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <div className="w-full flex flex-col justify-between">
      <motion.h1
        // transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        // initial={{ x: 250 }}
        // animate={{ x: -250 }}
        className="block w-full text-center text-2xl text-bold p-2 overflow-hidden"
      >
        {title}
      </motion.h1>
      <div
        onMouseEnter={() => {
          setIsPlaying(false);
        }}
        onMouseLeave={() => {
          setIsPlaying(true);
        }}
        className="w-full pb-2 border-orange-400 border-b-2 border-opacity-60 "
      >
        <Ticker duration={duration} direction={direction} isPlaying={isPlaying}>
          {colors.map((color, index) => {
            return (
              <div className=" bg-gray-800 p-2 border-rad mx-1 " key={index}>
                <div
                  style={{
                    backgroundColor: color,
                    height: "100px",
                    width: "100px",
                  }}
                />
                <p className=" pt-1 text-center align-baseline">
                  {" "}
                  Placeholdser{" "}
                </p>
              </div>
            );
          })}
        </Ticker>
      </div>
    </div>
  );
};

export default Slide;
