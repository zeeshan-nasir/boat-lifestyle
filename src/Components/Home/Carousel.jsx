import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselDiv = () => {
   return (
      <Carousel className="carousel"
         autoPlay="true"
         infiniteLoop="true"
         interval="3000"
         showThumbs=""
      >
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Sail_with_boAt_WEB_2000x.jpg?v=1651669770"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WhatsApp_Image_2022-04-29_at_11.32.28_AM_1600x.jpg?v=1651212278"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
               alt=""
            />
         </div>
      </Carousel>
   );
};

export default Carousel;
