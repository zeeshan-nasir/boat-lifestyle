import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TopSellers = () => {
   const [useClass, setUseClass] = useState("first");

   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Top Sellers</h1>
         <div className="textDiv flex">
            <p
               onClick={() => setUseClass("first")}
               className={useClass === "first" ? "red" : "simple"}
            >
               Smart Watches
            </p>
            <p
               onClick={() => setUseClass("second")}
               className={useClass === "second" ? "red" : "simple"}
            >
               Top Picks
            </p>
         </div>
         <div className="cardsDiv flex">
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_400x.png?v=1650387008"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.68 (34 reviews)
                  </p>
                  <p className="title">boAt Watch Xtend‌</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 2,499</p>
                        <p className="strPrice">₹ 7,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Colour variants for every style</li>
                     <li>Fast Charge in just 15 minutes</li>
                     <li>Ace your workouts with IPX5 rating</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_600x.png?v=1625046216"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.79 (757 reviews)
                  </p>
                  <p className="title">boAt Storm</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 2,499</p>
                        <p className="strPrice">₹ 5,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Track and transform your health</li>
                     <li>Full touch display</li>
                     <li>Track your SpO2 levels</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_400x.png?v=1640237576"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.68 (34 reviews)
                  </p>
                  <p className="title">boAt Watch Iris</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 4,399</p>
                        <p className="strPrice">₹ 11,999</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Amoled display</li>
                     <li>1.39 inches display</li>
                     <li>Health on the go</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_295a504a-2ae2-4719-9400-263f453efddd_400x.png?v=1635140773"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />5 (2 reviews)
                  </p>
                  <p className="title">boAt Watch‌ Vertex</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 2,399</p>
                        <p className="strPrice">₹ 6,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Colour variants for every style</li>
                     <li>Fast Charge in just 15 minutes</li>
                     <li>Ace your workouts with IPX5 rating</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopSellers;
