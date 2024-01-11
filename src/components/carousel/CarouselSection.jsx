/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NikeRed from "/sneaker_images/carouselImages/nike.jpg";
import Converse from "/sneaker_images/carouselImages/converse.jpg";
import Jordan from "/sneaker_images/carouselImages/jordans-nude.jpg";
import NewBalance from "/sneaker_images/carouselImages/newbalance.jpg";
import { Box, Flex, Image } from "@chakra-ui/react";

const CarouselSection = () => {
  return (
    <>
      <Flex wrap={{base: "wrap", md:"nowrap"}}>
        <Box w={{ lg: "50vw" }}>
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showIndicators={false}>
            <Box>
              <Image src={NewBalance} alt="/" h="full"/>
            </Box>
            <Box>
              <Image src={NikeRed} alt=""/>
            </Box>
          </Carousel>
        </Box>
        <Box w={{ lg: "50vw" }}>
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showIndicators={false}>
            <Box>
              <Image src={Jordan} alt="/" h="full"/>
            </Box>
            <Box>
              <Image src={Converse} alt=""/>
            </Box>
          </Carousel>
        </Box>
    </Flex>
    <style>
        {`
            .carousel .carousel-status {
              display: none;
            }
          `}
      </style>
    </>
  );
};

export default CarouselSection;
