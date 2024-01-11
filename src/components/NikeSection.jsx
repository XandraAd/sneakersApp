/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeader from "./shared/section-header/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./shared/product-cart/ProductCard";
import { Mousewheel, Navigation } from "swiper/modules";
import Nike1 from "../assets/MensSneakers/Air Max 270 Mens Trainers.jpg";
import Nike2 from "../assets/MensSneakers/Air Max Impact 4 Basketball Mens Shoe.jpg";
import Nike3 from "../assets/MensSneakers/Air Max Invigor Mens Trainers.jpg";
import Nike4 from "../assets/MensSneakers/Air MAx 90 Trainers.jpg";
import Nike5 from "../assets/MensSneakers/Air Max LTD 3 Mens Trainers.jpg"
import Nike6 from "../assets/MensSneakers/Air MAx SC Mens Shoe.jpg"

const AdidasCollections = [
  {
    id: 1,
    Src: Nike1,
    shoeDetail: "Air Max 270 Mens Trainers",
  },
  {
    id: 2,
    Src: Nike2 ,
    shoeDetail: "Air Max Impact 4 Basketball Mens Shoe",
  },
  {
    id: 3,
    Src: Nike3 ,
    shoeDetail: "Air Max Invigor Mens Trainers",
  },
  {
    id: 4,
    Src: Nike4 ,
    shoeDetail: "Air MAx 90 Trainers",
  },
  {
    id: 5,
    Src: Nike5 ,
    shoeDetail: "Air Max LTD 3 Mens Trainers",
  },
  {
    id: 6,
    Src: Nike6 ,
    shoeDetail: "Air MAx SC Mens Shoe",
  },
];

function NikeSection() {
  return (
    <>
      <div className="collection_section_headers">
        <SectionHeader sectionTitle={"Nike"} />
      </div>
      
        <Box mt={5} className="position-relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={true}
            modules={[Mousewheel, Navigation]}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              768: {
                slidesPerView: 2.25,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },

              1240: {
                slidesPerView: 4.5,
              },

              1440: {
                slidesPerView: 5.25,
                spaceBetween: -30,
              },

              1500: {
                slidesPerView: 5.75,
                spaceBetween: -50,
              },
            }}
            className="mySwiper customNavigationTarget pt-5 px-5"
          >
            
            {/* Remember to use map function to make code cleaner and more dynamic */}
            {AdidasCollections.map((adidas) => (
              //console.log(adidas),
              <SwiperSlide key={adidas.id}>
                <ProductCard
                  imgSrc={adidas.Src}
                  showBrandText={true}
                  cardWidth={"15.5rem"}
                  imgHeight={"17rem"}
                  shoeDetail={adidas.shoeDetail}
                  showHoverBorder
                  showBorder
                  objectFit={"contain"}
                  showPrice={true}
                  showShadow={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      
    </>
  );
}

export default NikeSection;