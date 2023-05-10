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

const AccordionBox = ({title}) => {
  return (
    <AccordionItem className="flex flex-col flex-grow  justify-center align-top w-full" >
      <h2>
        <AccordionButton>
          <AccordionIcon />

          <Box as="span" textAlign="left">
            {title}
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionBox;
