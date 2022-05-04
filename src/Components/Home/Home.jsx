import React from "react";
import "../Styles/home.css";
import { CarouselDiv } from "./Carousel";
import NewLaunches from "./NewLaunches";
import TopSellers from "./TopSellers";
import TrendingEarphones from "./TrendingEarphones";

const Home = () => {
   return (
      <div>
         <CarouselDiv />
         <TopSellers />
         <TrendingEarphones />
         <NewLaunches />
      </div>
   );
};

export default Home;
