/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeader from "./shared/section-header/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./shared/product-cart/ProductCard";
import { Mousewheel, Navigation } from "swiper/modules";
import Adidas1 from "../assets/MensSneakers/Copa Super Trainers B&W.jpg";
import Adidas2 from "../assets/MensSneakers/Samba Suede Mens Trainers.jpg";
import Adidas3 from "../assets/MensSneakers/Base Court Mens Trainers.jpg";
import Adidas4 from "../assets/MensSneakers/Hoops 3.0 Low Classic Vintage Mens Trainers.jpg";
import Adidas5 from "../assets/MensSneakers/Racer Falcon 3.0 Mens Trainers.jpg"
import Adidas6 from "../assets/MensSneakers/Wear all day Mens Trainers.jpg"

const AdidasCollections = [
  {
    id: 1,
    Src: Adidas1,
    shoeDetail: "Copa Super Trainers B&W",
  },
  {
    id: 2,
    Src: Adidas2 ,
    shoeDetail: "Samba Suede Mens Trainers",
  },
  {
    id: 3,
    Src: Adidas3 ,
    shoeDetail: "Base Court Mens Trainers",
  },
  {
    id: 4,
    Src: Adidas4 ,
    shoeDetail: "Hoops 3.0 Low Classic Vintage Mens Trainers",
  },
  {
    id: 5,
    Src: Adidas5 ,
    shoeDetail: "Racer Falcon 3.0 Mens Trainers",
  },
  {
    id: 6,
    Src: Adidas6 ,
    shoeDetail: "Dynamight 2 Rayhill Mens Trainers",
  },
];

function AdidasSection() {
  return (
    <>
      <div className="collection_section_headers">
        <SectionHeader sectionTitle={"Adidas"} />
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

export default AdidasSection;
