/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import React from "react";

function ProductCard({
  oldPrice,
  newPrice,
  shoeDescription,
  shoeBrand,
  showCardFooter = true,
  imgSrc,
  imgHeight,
  showBorderRadius,
  showBrandText,
  cardWidth,
  baseCardWidth,
  objectPosition,
  shoeDetail,
  showHoverBorder,
  showBorder,
  imgBoxMargin,
  showTransform,
  objectFit,
  showPrice,
  topLeftPrice,
  showShadow,
}) {
  return (
    <>
      <Card
        shadow={"none"}
        _hover={{
          cursor: "pointer",
          transform: showTransform ? "translateY(-1rem)" : "none",
          shadow: "3px 3px 5px 2px rgba(255,125,26,0.10)",
          boxShadow: showShadow ? "3px 3px 5px 2px rgba(255,125,26,0.10)" : "none"
        }}
        borderRadius={showBorderRadius ? "2rem" : "none"}
        overflow={"hidden"}
        position="relative"
        marginBlock="1rem"
        width={{ base: baseCardWidth, md: cardWidth }}
        transition="all 250ms ease-in-out"
        color="blackAlpha.700"
        backgroundColor={"transparent"}
        
      >
        <CardBody p={0} bg={"whiteAlpha.900"} mb={0}>
          <Box height={imgHeight} w="full">
            <Image
              src={imgSrc}
              alt="/"
              w="full"
              h="full"
              objectFit={objectFit}
              objectPosition={objectPosition}
            />
            {showPrice && <Text position="absolute" top="1rem" right="1rem" fontSize="sm">{topLeftPrice}</Text>}
          </Box>
          
        </CardBody>
        {showCardFooter && (
          <CardFooter pl={4} pt={2} pb={1} className="d-block bg-transparent">
            <div className=" d-flex gap-2 fw-bold">
              <Text fontSize={"md"} mb={0}>
                {newPrice}
              </Text>
              <Text
                fontSize={"sm"}
                className=" align-self-center text-decoration-line-through text-grey-30"
                mb={0}
              >
                {oldPrice}
              </Text>
            </div>
            <Text className="text-black-90 mt-1" fontSize={"sm"}>
              {shoeDescription}
            </Text>
            {showBrandText && (
            <>
              <Box
                w="full"
                height="4.5rem"
                mb="3"
                px="1"
                fontSize="sm"
              >
                <span className="text-orange fs-6">{shoeBrand}</span>
                <br />
                <span className="text-black-90">{shoeDetail}</span>
              </Box>
            </>
          )}
          </CardFooter>
        )}
      </Card>
    </>
  );
}

export default ProductCard;