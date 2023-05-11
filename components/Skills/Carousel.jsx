import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
// import Ticker from "./Ticker";
import Ticker from "framer-motion-ticker";
import { DiJava } from "react-icons/di";

const Slide = ({ title, skills, direction, duration }) => {
  // const isInView = useInView(scope);
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <div className=" w-full sm:w-2/3 m-auto flex flex-col justify-center">
      <motion.h2
        // transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        // initial={{ x: 250 }}
        // animate={{ x: -250 }}
        className="w-full text-center text-xl text-bold p-2 overflow-hidden"
      >
        {title}
      </motion.h2>
      <div
        // onMouseEnter={() => {
        //   setIsPlaying(false);
        // }}
        // onMouseLeave={() => {
        //   setIsPlaying(true);
        // }}
        className="w-full pb-1 flex flex-1  border-orange-400 border-b-2 border-opacity-60 "
      >
        <Ticker duration={duration} direction={direction} isPlaying={isPlaying}>
          {skills.map((skill) => {
            return (
              <div
                onMouseEnter={(e) => {
                  setIsPlaying(false);
                  skill.x = false;
                }}
                onMouseLeave={(e) => {
                  setIsPlaying(true);
                  skill.x = true;
                }}
                className={
                  isPlaying
                    ? " bg-[#0b1c3182] p-4 border-rad mx-2 "
                    : " bg-[#0b1c3182] p-4 border-rad mx-2"
                }
                key={skill.id}
              >
                {skill.x ? (
                  skill.icon
                ) : (
                  <div className="p-2 border-rad mx-2 ">{skill.name}</div>
                )}
              </div>
            );
          })}
        </Ticker>
      </div>
    </div>
  );
};

export default Slide;
