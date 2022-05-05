import React from "react";

const PressComponent = () => {
   return (
      <div className="pressComponent">
         <div className="pressDiv">
            <h1 className="pressHeading">In the Press</h1>
            <p className="pressText">
               <span className="pressCommas">❝</span> Warburg invests $100 mn in
               boAt<span className="pressCommas">❞</span>{" "}
            </p>
            <div className="pressLinksDiv flex">
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mint_0566185f-75d7-4819-a2a2-e2acc4535e78_200x.png?v=1649066803"
                  alt=""
               />
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Forbes_1_641a219a-af36-45ee-8d3b-90ca148056c1_200x.png?v=1649066820"
                  alt=""
               />
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/techradar_1_ba476d16-16de-4a29-baa2-537f33fc7f88_200x.png?v=1649066820"
                  alt=""
               />

               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gadgets360_1_6a0c2c78-109a-4cbc-be58-05b893a41d4a_231x.png?v=1649066821"
                  alt=""
               />
            </div>
         </div>
         <div className="ratingDiv">
            <img
               className="pressRatings"
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter-Awards_11-02-2022_5d6a9e4a-d3d4-434b-8846-4403e92c3573_1995x.png?v=1651217615"
               alt=""
            />
         </div>
         <div className="promise">
            <h1 className="pressHeading">Brand Promise</h1>
            <div className="flex lastDivPress">
               <img
                  className="lastDivPressImg"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367"
                  alt=""
               />
               <p>Free Shipping</p>
               <img
                  className="lastDivPressImg"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367"
                  alt=""
               />
               <p>Exclusive Deals</p>
               <img
                  className="lastDivPressImg"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367"
                  alt=""
               />
               <p>Secure Checkout</p>
            </div>
         </div>
         <div className="disclaimer">
            <p className="disclaimerText">
               India's fastest growing audio & wearables brand. The most
               incredible range of wireless earphones, earbuds, headphones,
               smart watches, and home audio. From workouts to adventures, boAt
               will get you sailing!
            </p>
         </div>
      </div>
   );
};

export default PressComponent;
