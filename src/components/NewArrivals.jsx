/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import SectionHeader from "./shared/section-header/SectionHeader";
import ProductCard from "./shared/product-cart/ProductCard";
import shoeData from "./shoeData";

const NewArrivals = () => {
  return (
    <>
      <Box mt={10} className="position-relative">
        <Swiper
          slidesPerView={1.25}
          mousewheel= {{forceToAxis: true}}
          spaceBetween={100}
          navigation={true}
          direction={'horizontal'}
          modules={[Mousewheel, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2.25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1240: {
              slidesPerView: 3.85,
            },
            1440: {
              slidesPerView: 4.25,
              spaceBetween: 60,
            },
            1500: {
              slidesPerView: 4.75,
              spaceBetween: 90,
            }
          }}
          className="mySwiper customNavigationTarget pt-5 px-5"
        >
          <div className="popular-brands-header">
            <SectionHeader sectionTitle={"New Arrivals"} />
          </div>
          {/* Remember to use map function to make code cleaner and more dynamic */}
          {shoeData.map((shoe)=> (
            <SwiperSlide key={shoe.id}>
            <ProductCard
              imgSrc={shoe.arrivalSrc}
              cardWidth={"20rem"}
              baseCardWidth={"78vw"}
              imgHeight={"25rem"}
              shoeDescription={shoe.shoeDescription}
              showTransform={true}
              objectFit={"cover"}
              showShadow={true}
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default NewArrivals;
