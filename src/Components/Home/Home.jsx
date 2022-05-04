import React from "react";
import "../Styles/home.css";
import { CarouselDiv } from "./Carousel";
import TopSellers from "./TopSellers";

const Home = () => {
   return (
      <div>
         <CarouselDiv />
         <TopSellers />
      </div>
   );
};

export default Home;
