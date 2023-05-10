import React from "react";
import { Fragment, useState } from "react";
import AccardionItem from "./AccardionItem";

const Experiences = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div
      id="experiences"
      className="flex flex-col flex-grow custom-h align-middle  justify-between border-red-400 border-2 w-full md:w-2/3 mx-auto "
    >
      <h1 className="block text-center w-full p-2 border-slate-700 border-b-2">
        Experiences
      </h1>
      {/* Whitespaces will be added after Job Title */}
      <div className="border-green-400 border-2 flex flex-grow flex-col w-full justify-start ">
        <div className="flex flex-col flex-grow   justify-center align-top w-full">
          <span className="flex flex-row border-slate-700 border-b-2 pb-1  w-full justify-start">
            <h2> Kraft Heinz - Data Analyst / </h2>
            <h2 className="text-xs italic   " style={{ lineHeight: 2 }}>
              {" "}
              July 2021 - Present{" "}
            </h2>{" "}
          </span>
        </div>
        
        <AccardionItem/>

        <div className="flex flex-col flex-grow  justify-center align-top w-full">
          <span className="flex flex-row  border-slate-700 border-b-2 pb-1 w-full justify-start ">
            <h2> Frachtbox - Key Account Executive - </h2>
            <h2 className="text-xs italic  " style={{ lineHeight: 2 }}>
              {" "}
              September 2020 - February 2021{" "}
            </h2>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default Experiences;
