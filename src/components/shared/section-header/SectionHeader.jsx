/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
//import { GiConverseShoe } from "react-icons/gi";

function SectionHeader({ sectionTitle}) {
  return (
    <>
      <Box className="ms-5">
        <Text className="fs-5 fw-bold mb-0 pt-3">{sectionTitle}</Text>
      </Box>
      
    </>
  );
}

export default SectionHeader;