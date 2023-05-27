import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ExperiencePoint from "./ExperiencePoint";

const AccordionBox = ({ title, date, points }) => {
  return (
    <AccordionItem className="flex flex-col flex-grow p-2 text-lg justify-center align-top w-full">
      {({ isExpanded }) => (
        (
          <>
            <h2
              className={
                (isExpanded ? " shadow-sm shadow-[#1623338e]  " : " ") +
                "py-4 px-2 w-full bg-[#06142462] hover:bg-[#0c15209a]"
              }
            >
              <AccordionButton className="w-full">
                <AccordionIcon />

                <Box pl={8} as="span" textAlign="left">
                  {title} - <i className="text-xs">{date} </i>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel className="p-2 mt-2 text-base inline-block w-full bg-[#0b1c3182] ">
              <ExperiencePoint points={points} />
            </AccordionPanel>
          </>
        )
      )}
    </AccordionItem>
  );
};

export default AccordionBox;
