import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ExperiencePoint from "./ExperiencePoint";
import { useTheme } from "../../context/Theme";

const AccordionBox = ({ title, date, points }) => {
  const { isDark } = useTheme();

  return (
    <AccordionItem className="flex flex-col flex-grow p-2 text-lg justify-center align-top w-full">
      {({ isExpanded }) => (
        <>
          <h2
            className={`${isExpanded ? "shadow-sm shadow-[#1623338e]" : ""} ${
              isDark
                ? "hover:bg-[#121e2c38] "
                : " bg-slate-200 hover:bg-slate-300"
            }    py-4 px-2 w-full   `}
          >
            <AccordionButton className="w-full">
              <AccordionIcon />

              <Box
                pl={8}
                as="div"
                textAlign="left"
                className="flex w-full flex-row justify-between"
              >
                <p> {title} </p>{" "}
                <span className="text-sm !leading-7 align-middle italic">
                  {date}{" "}
                </span>
                {/* {title} - al <i className="text-xs">{date} </i> */}
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel
            className={`${
              isDark ? "bg-[#24467044]" : " bg-slate-100"
            }   p-2 mt-2 text-base inline-block w-full  bg-[#24467044] `}
          >
            <ExperiencePoint points={points} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default AccordionBox;
