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

const AccordionBox = ({ title, date }) => {
  return (
    <AccordionItem className="flex flex-col flex-grow  p-2 my-2 border-orange-700 border-2 justify-center align-top w-full">
      {({ isExpanded }) => (
        console.log(isExpanded),
        (
          <>
            <h2
              className={
                (isExpanded
                  ? " shadow-sm shadow-slate-800  "
                  : "shadow-sm shadow-slate-700 ") +
                " p-2 w-full hover:bg-gray-900"
              }
            >
              <AccordionButton>
                <AccordionIcon />

                <Box pl={8} as="span" textAlign="left">
                  {title} - <i className="text-xs">{date} </i>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel className="p-2">
              <ul>
                <li>
                  Developed a web application for the company’s clients to track
                  their shipments and invoices.
                </li>
                <li>
                  Developed a web application for the company’s clients to track
                  their shipments and invoices.
                </li>
                <li>
                  Developed a web application for the company’s clients to track
                  their shipments and invoices.
                </li>
              </ul>
            </AccordionPanel>
          </>
        )
      )}
    </AccordionItem>
  );
};

export default AccordionBox;
