import React from "react";
import EducationData from "../../public/Education.json";

const Education = () => {
  return (
    <section id="education" className="sectionContainer">
      <h1 className="sectionTitle">Education</h1>
      <div className="w-full CONTAINER ">
        {EducationData &&
          EducationData.map((data, index) => {
            return (
              <div
                key={index}
                className=" bg-gray-100 flex flex-col flex-grow p-2 my-2 text-lg justify-center align-top w-full"
              >
                <div className="flex w-full flex-row justify-between">
                  <p> • {data.title} </p>
                  <span className="text-xs !leading-7 align-middle italic">
                    {data.date}{" "}
                  </span>{" "}
                </div>
                <p className=" text-sm ml-3">{data.details}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Education;
