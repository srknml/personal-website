import React from "react";
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";

const Slide = ({ title, skills, direction, duration }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <div className=" w-full sm:w-2/3 m-auto flex flex-col justify-center">
      <motion.h2
        transition={{ duration: 2, ease: "linear", from: 10, repeat: Infinity }}
        animate={{ x: "-70%" }}
        className="w-full text-center text-xl font-semibold p-2 overflow-hidden"
      >
        {title}
      </motion.h2>
      <div
        onMouseEnter={() => {
          setIsPlaying(false);
        }}
        onMouseLeave={() => {
          setIsPlaying(true);
        }}
        className="w-full pb-1 flex flex-1  border-orange-400 border-b-2 border-opacity-60 "
      >
        <Ticker duration={duration} direction={direction} isPlaying={isPlaying}>
          {skills.map((skill) => {
            return (
              <div
                onMouseEnter={(e) => {
                  // skill.x = false;
                  console.log("Enter");
                }}
                onMouseLeave={(e) => {
                  // skill.x = true;
                  console.log("Leave");
                }}
                onClick={(e) => {
                  skill.x = false;
                  console.log("Click");
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
