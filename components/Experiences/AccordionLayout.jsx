import React from "react";
import { Accordion } from "@chakra-ui/react";

const AccordionLayout = ({ children }) => {
  return (
    <Accordion className="w-full" defaultIndex={[0]} allowMultiple>
      {children}
    </Accordion>
  );
};

export default AccordionLayout;
