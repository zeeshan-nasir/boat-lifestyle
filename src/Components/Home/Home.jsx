import React from "react";
import "../Styles/home.css";
import BoatBlogs from "./BoatBlogs";
import { CarouselDiv } from "./Carousel";
import Gaming from "./Gaming";
import NewLaunches from "./NewLaunches";
import PressComponent from "./PressComponent";
import TopSellers from "./TopSellers";
import TrendingEarphones from "./TrendingEarphones";
import TrendingHeadphones from "./TrendingHeadphones";

const Home = () => {
   return (
      <div>
         <CarouselDiv />
         <TopSellers />
         <TrendingEarphones />
         <NewLaunches />
         <TrendingHeadphones />
         <Gaming />
         <BoatBlogs />
         <PressComponent />
      </div>
   );
};

export default Home;
