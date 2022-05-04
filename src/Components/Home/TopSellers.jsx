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
         </div>
      </div>
   );
};

export default TopSellers;
