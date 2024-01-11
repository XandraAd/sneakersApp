/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "./shared/section-header/SectionHeader";

const images = [
  {
    src: "/sneaker_images/men.jpg",
    category: "Men",
    description: "Stylish comfort for modern men",
    top: "60%",
    left: "3%",
  },
  {
    src: "/sneaker_images/women.jpg",
    category: "Women",
    description: "Chic versatility for active women",
    top: "15%",
    right: "5%",
  },
  {
    src: "/sneaker_images/kids.jpg",
    category: "Kids",
    description: "Fun and durable playtime companions",
    top: "5%",
    left: "30%",
    align: "center",
    backgroundColor: "rgba(0, 0, 0, 0.13)"
  },
  {
    src: "/sneaker_images/sports.jpg",
    category: "Sports",
    description: "High-performance athletic prowess unleashed",
    top: "10%",
    left: "5vw",
    backgroundColor: "rgba(0, 0, 0, 0.13)"
  },
];

function Categories() {
  return (
    <>
      <Box my={10}>
        <div className="mb-4">
          <SectionHeader sectionTitle={"Top Categories"} />
        </div>
        <Flex ms={10} wrap={"wrap"} gap={3}>
          {images.map((image, index) => (
            <Box w={{base: "81vw", lg:"calc(50% - 1.5rem)"}} key={index} h={{lg: "70vh"}} position={"relative"}>
              <Image src={image.src} h={"full"} objectFit={"cover"}/>
              <Box
                position="absolute"
                top={0}
                left={0}
                w={"100%"}
                h={"100%"}
                backgroundColor={image.backgroundColor}
                zIndex={1}
                opacity={1}
              />
              <Box
                position={"absolute"}
                top={image.top}
                left={image.left}
                right={image.right}
                textAlign={image.align}
                backdropFilter={"blur(10px)"}
                backgroundColor={"#54545414"}
                zIndex={2}
                w={"18rem"}
                px={4}
                pb={4}
                color={"whiteAlpha.900"}
                borderRadius={"xl"}
              >
                <Text fontSize={{base:"xl", lg:"5xl"}} >
                  {image.category}
                </Text>
                <Text className="fw-bold" >{image.description}</Text>

                <Button
                  className="align-self-center"
                  size={"md"}
                  w={"60%"}
                  backgroundColor={"#54545454"}
                  color= "hsl(0, 0%, 100%)"
                  backdropFilter={"blur(10px)"}
                  _hover={{
                    backgroundColor: "hsl(26, 100%, 55%)",
                    boxShadow: "lg",
                  }}

                  //   onClick={handleAddtoCart}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Categories;
