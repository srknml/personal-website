import React from "react";

const ExperiencePoint = ({ points }) => {
  return (
    <ul className=" w-full">
      {points &&
        points.map((point, i) => {
          return (
            <li  key={i} className="p-1 my-1">
              {`• ${point}`}
            </li>
          );
        })}
    </ul>
  );
};

export default ExperiencePoint;
