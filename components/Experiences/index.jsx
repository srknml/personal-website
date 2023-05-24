import React, { useEffect } from "react";
import AccordionLayout from "./AccordionLayout";
import AccordionBox from "./AccardionItem";
import ExperienceTitle from "./ExperienceTitle";

import ExperiencesData from "../../public/Experiences.json";

const Experiences = () => {
  useEffect(() => {
    document.querySelectorAll("div.chakra-collapse").forEach((element) => {
      element.classList.add("w-full");
    });
  }, []);

  return (
    <div
      id="experiences"
      className="flex flex-col flex-grow custom-h align-middle  justify-between mock-border w-full md:w-4/5 mx-auto "
    >
      <h1 className="text-bold my-2 text-2xl block text-center w-full md:w-full mx-auto py-4 border-gray-500 border-b-2  ">
        Experiences
      </h1>
      {/* Whitespaces will be added after Job Title */}
      <div className=" flex flex-grow flex-col w-full justify-start  ">
        <AccordionLayout>
          {ExperiencesData &&
            ExperiencesData.map((ExperienceData, i) => {
              return (
                <AccordionBox
                  key={i}
                  title={ExperienceData.title}
                  date={ExperienceData.date}
                  points={ExperienceData.points}
                />
              );
            })}
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
