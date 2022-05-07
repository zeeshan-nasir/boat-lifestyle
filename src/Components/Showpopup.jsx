import React from "react";
import { useNavigate } from "react-router-dom";

const Showpopup = ({ show, setShow }) => {
   const navigate = useNavigate();

   return (
      <div className="showPopup">
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/wireless_earbuds");
            }}
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_480x.png?v=1612338251"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/wired_earphones");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/smart_watches");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_1196x.jpg?v=1648546494"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/wired_earphones");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/wireless_speakers");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/home_theatre");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/mobile_accessories");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_1196x.jpg?v=1648545875"
            alt=""
         />
         <img
            onClick={() => {
               setShow(!show);
               navigate("/products/grooming");
            }}
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_1242x.png?v=1615033153"
            alt=""
         />
      </div>
   );
};

export default Showpopup;
