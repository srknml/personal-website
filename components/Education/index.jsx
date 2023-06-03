import React from "react";
import EducationData from "../../public/Education.json";
import { useTheme } from "../../context/Theme";

const Education = () => {
  const { isDark } = useTheme();
  return (
    <section id="education" className="sectionContainer">
      <h1 className="sectionTitle">Education</h1>
      <div className="w-full CONTAINER ">
        {EducationData &&
          EducationData.map((data, index) => {
            return (
              <div
                key={index}
                className={`${
                  isDark ? "  bg-[#24467044]" : "light"
                }  flex flex-col flex-grow p-2 my-2 text-lg justify-center align-top w-full`}
              >
                <div className="flex w-full flex-row justify-between">
                  <p> • {data.title} </p>
                  <span className="text-sm !leading-7 align-middle">
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
