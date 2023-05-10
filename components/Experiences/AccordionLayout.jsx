import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const AccordionLayout = ({ children }) => {
  return (
    <Accordion allowToggle allowMultiple>
      {children}
    </Accordion>
  );
};

export default AccordionLayout;
