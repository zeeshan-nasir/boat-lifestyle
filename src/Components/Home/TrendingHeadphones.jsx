import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingHeadphones = () => {
   const [useClass, setUseClass] = useState("first");

   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Trending Headphones</h1>
         <div className="textDiv flex">
            <p
               onClick={() => setUseClass("first")}
               className={useClass === "first" ? "red" : "simple"}
            >
               Wireless
            </p>
            <p
               onClick={() => setUseClass("second")}
               className={useClass === "second" ? "red" : "simple"}
            >
               ANC
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
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_400x.png?v=1625045854"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.73 (114 reviews)
                  </p>
                  <p className="title">boAt Rockerz 255 Pro</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 999</p>
                        <p className="strPrice">₹ 3,499</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Charges within an hour</li>
                     <li>Sporty with water resistant</li>
                     <li>CVC Noise cancelation</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.87 (206 reviews)
                  </p>
                  <p className="title">boAt Rockerz 550</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 1,599</p>
                        <p className="strPrice">₹ 5,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>Playback of up to 20 hours</li>
                     <li>Designed for music lovers</li>
                     <li>Blocks out ambient sounds</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.8 (844 reviews)
                  </p>
                  <p className="title">boAt Rockerz 235 V2</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 869</p>
                        <p className="strPrice">₹ 2,990</p>
                     </div>
                     <button className="cardBtn">ADD +</button>
                  </div>
                  <ul className="list">
                     <li>8H non-stop music</li>
                     <li>Sweat and water resistant</li>
                     <li>4Hrs charge in 20minutes</li>
                  </ul>
               </div>
            </div>
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-red_bd675504-5750-4b42-97b9-79caf2cc9034_400x.png?v=1614587254"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />5 (2 reviews)
                  </p>
                  <p className="title">TRebel Rockerz 255 Pro</p>
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

export default TrendingHeadphones;
