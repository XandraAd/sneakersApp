/* eslint-disable no-unused-vars */
import React from "react";
import mensData from "../components/MensData";
import { Box, Flex } from "@chakra-ui/react";
import SectionHeader from "../components/shared/section-header/SectionHeader";
import ProductCard from "../components/shared/product-cart/ProductCard";

const Women = () => {
  return (
    <>
      <Box mt={5} className="position-relative">
        <div>
          <SectionHeader sectionTitle={"Womens Sneakers"} />
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
                showCardFooter={true}
                newPrice={men.newPrice}
                cardWidth={"19rem"}
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

export default Women;
