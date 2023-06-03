import React from "react";
import AccordionBox from "../Experiences/AccardionItem";
import AccordionLayout from "../Experiences/AccordionLayout";

const Education = () => {
  return (
    <section id="education" className="sectionContainer">
      <h1 className="sectionTitle">Education</h1>
      <div className="w-full CONTAINER ">
        <div className=" bg-slate-100 flex flex-col flex-grow p-2 text-lg justify-center align-top w-full">
          <div className="flex w-full flex-row justify-between">
            <p> • Kadir Has University </p>{" "}
            <span className="text-xs !leading-7 align-middle italic">
              {"2016 - 2020"}{" "}
            </span>{" "}
          </div>
          <p className=" text-sm ml-3">
            {" "}
            International Trade Logistics - Full Scholarship{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
