/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@chakra-ui/react";
import AdidasSection from "../components/AdidasSection";
import NikeSection from "../components/NikeSection"

function Collections() {
  return (
    <>
      <Box>
        <AdidasSection />
        <NikeSection/>
      </Box>
    </>
  );
}

export default Collections;