import React from "react";
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";
import Slide from "./Slide";
const Skills = () => {
  const colors = ["#632bf3", "#f122c8", "#e8f12b", "#f12b2b", "#2bf1f1"];
  //   Java, Selenium, Cucumber, JUnit, JavaScript, React,
  //   Next,js MySQL, SQL Server, Git, Github, Jenkins, Jira

  return (
    <div
      id="skills"
      className="flex flex-col flex-grow custom-h border-red-400 border-2 w-full md:w-2/3 m-auto"
    >
      <Slide colors={colors} title={"Colors"} duration={20} direction={1} />
      <Slide colors={colors} title={"Colors"} duration={10} />
      <Slide colors={colors} title={"Colors"} duration={5} direction={1} />
    </div>
  );
};

export default Skills;
