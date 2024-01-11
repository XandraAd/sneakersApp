/* eslint-disable no-unused-vars */
import React from "react";
import CarouselSection from "../components/carousel/CarouselSection";
import Brands from "../components/Brands";
import NewArrivals from "../components/NewArrivals";
import Categories from "../components/Categories";

function Home() {
  return (
    <>
      <CarouselSection />
      <NewArrivals/>
      <Brands />
      <Categories/>
    </>
  );
}

export default Home;