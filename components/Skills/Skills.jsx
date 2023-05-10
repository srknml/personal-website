import React from "react";
import Carousel from "./Carousel";
import { DiJava, DiJavascript1, DiMsqlServer, DiCss3 } from "react-icons/di";

import {
  SiJenkins,
  SiJira,
  SiSelenium,
  SiCucumber,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaAws, FaReact, FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
const skills = [
  {
    name: "Java",
    id: 1,
    icon: <DiJava size={40} />,
  },
  {
    name: "JavaScript",
    id: 2,
    icon: <DiJavascript1 size={40} />,
  },
  {
    name: "Selenium",
    id: 3,
    icon: <SiSelenium size={40} />,
  },
  {
    name: "Cucumber",
    id: 4,
    icon: <SiCucumber size={40} />,
  },
  {
    name: "Jenkins",
    id: 5,
    icon: <SiJenkins size={40} />,
  },
  {
    name: "Jira",
    id: 6,
    icon: <SiJira size={40} />,
  },
  {
    name: "Github",
    id: 7,
    icon: <BsGithub size={40} />,
  },
  {
    name: "SQL Server",
    id: 8,
    icon: <DiMsqlServer size={40} />,
  },
  {
    name: "MySQL",
    id: 9,
    icon: <SiMysql size={40} />,
  },
  {
    name: "Postman",
    id: 10,
    icon: <SiPostman size={40} />,
  },
  {
    name: "Firebase",
    id: 11,
    icon: <SiFirebase size={40} />,
  },
  {
    name: "AWS",
    id: 12,
    icon: <FaAws size={40} />,
  },
  {
    name: "React",
    id: 13,
    icon: <FaReact size={40} />,
  },
  {
    name: "Next.js",
    id: 14,
    icon: <TbBrandNextjs size={40} />,
  },
  {
    name: "Tailwind CSS",
    id: 15,
    icon: <SiTailwindcss size={40} />,
  },
  {
    name: "Framer Motion",
    id: 16,
    icon: <SiFramer size={40} />,
  },
  {
    name: "HTML",
    id: 17,
    icon: <FaHtml5 size={40} />,
  },
  {
    name: "CSS",
    id: 18,
    icon: <DiCss3 size={40} />,
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col  custom-h align-middle  justify-between mock-border w-full md:w-1/2 mx-auto"
    >
      <h1 className="text-bold  text-2xl block text-center w-full md:w-full mx-auto py-4 border-gray-500 border-b-2  ">
        Skills and Tools
      </h1>
      <Carousel skills={skills} title={"Colors"} duration={20} direction={1} />
      <Carousel skills={skills} title={"Colors"} duration={10} />
      <Carousel skills={skills} title={"Colors"} duration={5} direction={1} />
    </div>
  );
};

export default Skills;
