import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingEarphones = () => {
   const [useClass, setUseClass] = useState("first");

   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Top Earphones</h1>
         <div className="textDiv flex">
            <p
               onClick={() => setUseClass("first")}
               className={useClass === "first" ? "red" : "simple"}
            >
               Earbuds
            </p>
            <p
               onClick={() => setUseClass("second")}
               className={useClass === "second" ? "red" : "simple"}
            >
               Wireless
            </p>
            <p
               onClick={() => setUseClass("third")}
               className={useClass === "third" ? "red" : "simple"}
            >
               Wired
            </p>
         </div>
         <div className="cardsDiv flex">
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/218997d1-3fe9-4a19-809c-94a8a2d05273_500x.png?v=1625045659"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.73 (114 reviews)
                  </p>
                  <p className="title">BOAT Airdopes 441 Pro</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 2,299</p>
                        <p className="strPrice">₹ 5,999</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Thumping bass & immersive sound</li>
                     <li>Playback of 5H with each charge</li>
                     <li>Ace your workouts with IPX5 rating</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_400x.png?v=1630059242"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.76 (386 reviews)
                  </p>
                  <p className="title">boAt Airdopes 402 - Wireless</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 1,599</p>
                        <p className="strPrice">₹ 5,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Ergonomic design</li>
                     <li>Uninterrupted music for 4 hours</li>
                     <li>Pocket-friendly charging case</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6e1b5a7a-8f56-48c6-819d-24395393db81_400x.png?v=1624430639"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.83 (6 reviews)
                  </p>
                  <p className="title">BOAT Airdopes 281 Pro</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 2,499</p>
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
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img_AD621_1_400x.png?v=1616230788"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />5 (2 reviews)
                  </p>
                  <p className="title">BOAT Airdopes 621</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 2,499</p>
                        <p className="strPrice">₹ 7,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Perfectly fits ears for dance sessions</li>
                     <li>Enjoy 3.5 hours of unstoppable music</li>
                     <li>IPX5 rated for workouts and adventures</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TrendingEarphones;
