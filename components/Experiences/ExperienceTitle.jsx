import React from "react";

const ExperienceTitle = ({jobTitle, date}) => {
  return (
    <div className="flex flex-col flex-grow  border-slate-700 border-b-2 mb-2 pb-1  justify-center align-top w-full">
      <span className="flex flex-row   w-full justify-start">
        <h2> {jobTitle} </h2>
        <h2 className="text-xs italic   " style={{ lineHeight: 2 }}>
        {date}
        </h2>{" "}
      </span>
    </div>
  );
};

export default ExperienceTitle;
