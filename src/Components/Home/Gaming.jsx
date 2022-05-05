import React from "react";
import { AiFillStar } from "react-icons/ai";

const Gaming = () => {
   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Gaming</h1>

         <div className="cardsDiv flex">
            <div className="card">
               <div className="imageDiv">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_400x.png?v=1643477993"
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
                        <p className="price">₹ 2,499</p>
                        <p className="strPrice">₹ 6,990</p>
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
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_400x.png?v=1632715015"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.5 (2 reviews)
                  </p>
                  <p className="title">boAt Immortal 1300</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 3,499</p>
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
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_400x.png?v=1625748159"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />
                     4.83 (6 reviews)
                  </p>
                  <p className="title">boAt Immortal 1000D</p>
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
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_400x.png?v=1643632679"
                     alt=""
                  />
               </div>
               <div className="dataDiv">
                  <p className="reviewsDiv">
                     <AiFillStar />5 (2 reviews)
                  </p>
                  <p className="title">boAt Immortal 400</p>
                  <div className="priceDiv flex">
                     <div className="flex">
                        <p className="price">₹ 1,999</p>
                        <p className="strPrice">₹ 6,990</p>
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

export default Gaming;
