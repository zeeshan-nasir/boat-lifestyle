import React from "react";
import "../Styles/home.css";
import BoatBlogs from "./BoatBlogs";
import { CarouselDiv } from "./Carousel";
import NewLaunches from "./NewLaunches";
import PressComponent from "./PressComponent";
import TopSellers from "./TopSellers";
import TrendingEarphones from "./TrendingEarphones";
import TrendingHeadphones from "./TrendingHeadphones";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/AddToCart/actions";
import Grooming from "./Grooming";

const Home = () => {
   const dispatch = useDispatch();

   const handleDispatch = (item) => {
      dispatch(addToCart(item));
   };

   return (
      <div>
         <CarouselDiv />
         <TopSellers handleDispatch={handleDispatch} />
         <TrendingEarphones handleDispatch={handleDispatch} />
         <NewLaunches />
         <TrendingHeadphones handleDispatch={handleDispatch} />
         <Grooming handleDispatch={handleDispatch} />
         <BoatBlogs />
         <PressComponent />
      </div>
   );
};

export default Home;
