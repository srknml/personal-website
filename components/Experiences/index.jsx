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
      className="sectionContainer "
    >
      <h1 className="sectionTitle">
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
