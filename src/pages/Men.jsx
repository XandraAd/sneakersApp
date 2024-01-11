/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ProductCard from "../components/shared/product-cart/ProductCard";
import SectionHeader from "../components/shared/section-header/SectionHeader";

import mensData from "../components/MensData";

const Men = () => {
  return (
    <>
      <Box mt={5} className="position-relative">
        <div>
          <SectionHeader sectionTitle={"Mens Sneakers"} />
        </div>

        <Flex wrap={"wrap"} gap={3}>
          {" "}
          {/* Remember to use map function to make code cleaner and more dynamic */}
          {mensData.map((men) => (
            <Box key={men.id}>
              <ProductCard
              showBrandText={true}
              shoeBrand={men.mensBrand}
                imgSrc={men.adidasSrc}
                
                cardWidth={"15rem"}
                shoeDetail={men.mensDetail}
                showHoverBorder
                showBorder
                showBorderRadius
                imgBoxMargin={5}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Men;
