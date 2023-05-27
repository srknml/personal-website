import React, { useEffect } from "react";
import AccordionLayout from "./AccordionLayout";
import AccordionBox from "./AccardionItem";

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
      <h1 className="font-bold my-2 text-2xl block text-center w-full md:w-full mx-auto py-4 border-gray-500 border-b-2  ">
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

export default Experiences;
