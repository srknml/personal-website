import React from "react";
import AccordionLayout from "./AccordionLayout";
import AccordionBox from "./AccardionItem";
import ExperienceTitle from "./ExperienceTitle";

const Experiences = () => {
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
        <AccordionLayout>
          <AccordionBox
            title={"Kraft Heinz - Data Analyst "}
            date={"July 2021 - Present"}
          />
          <AccordionBox
            title={"Frachtbox - Key Account Executive "}
            date={"September 2020 - February 2021"}
          />
        </AccordionLayout>
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
