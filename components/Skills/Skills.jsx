import React from "react";
import Carousel from "./Carousel";
const Skills = () => {
  const colors = ["#632bf3", "#f122c8", "#e8f12b", "#f12b2b", "#2bf1f1"];
  //   Java, Selenium, Cucumber, JUnit, JavaScript, React,
  //   Next,js MySQL, SQL Server, Git, Github, Jenkins, Jira

  return (
    <div
      id="skills"
      className="flex flex-col flex-grow custom-h align-middle  justify-between border-red-400 border-2 w-full md:w-2/3 m-auto"
    >
      <h1 className="text-bold text-2xl block text-center w-full py-4 border-gray-500 border-b-2  ">
        Skills and Tools
      </h1>
      <Carousel colors={colors} title={"Colors"} duration={20} direction={1} />
      <Carousel colors={colors} title={"Colors"} duration={10} />
      <Carousel colors={colors} title={"Colors"} duration={5} direction={1} />
    </div>
  );
};

export default Skills;
