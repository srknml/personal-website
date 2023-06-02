import React from "react";
import { motion } from "framer-motion";
import Utils from "../../Utils/index";

const Article = () => {
  const { motions } = Utils;
  return (
    <motion.article
      initial={motions.rightToLeft.initial}
      animate={motions.rightToLeft.animate}
      className="md-max:border-t-gray-500 md-max:mt-3 md-max:border-t-2 w-full md:w-2/3 h-full md:border-l-gray-500 border-opacity-30  md:border-l-2 p-2  space-y-2  flex flex-col items-start "
    >
      <h1 className="text-2xl font-bold block w-full text-center">
        Serkan Nemli
      </h1>
      <p className="">
        Highly motivated Software Automation Tester with hands-on experience in
        manual and automation testing of web applications, including database
        and API, in agile environments. Proven ability in design and building
        automation frameworks by using Object Oriented Programming principles.
        Disciplined and capable of managing heavy workloads while maintaining
        attention to detail. Self-driven learner consistently seeking growth
        opportunities. Ready to contribute to the success of software projects
        with a strong focus on communication and teamwork.
      </p>
    </motion.article>
  );
};

export default Article;
