import React from "react";

const NewLaunches = () => {
   return (
      <div className="newLaunches">
         <h1 className="headingText">New Launches</h1>
         <div className="newLaunchesDiv flex">
            <div>
               <img
                  className="arrowSize"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/left-arrow_1.png?v=1642498138"
                  alt=""
               />
            </div>
            <div className="newLaunchesMiddle flex">
               <div className="launchesImgDiv">
                  <img
                     className="launchesImg"
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_684x615_Black.jpg?v=1651651602"
                     alt=""
                  />
               </div>
               <div className="launchesDataDiv">
                  <p className="text1">Bluetooth Speaker</p>
                  <p className="titleText">boAt Stone 1450</p>
                  <p className="text3">Special launch price</p>
                  <p className="rupeeText">Rs. 3999</p>
                  <div className="flex descriptionDiv">
                     <p className="text5">DESCRIPTION</p>
                     <p className="text6">FEATURES</p>
                  </div>
                  <div className="para">
                     <p className="textPara">
                        Focus on what matters with Airdopes 500 ANC that helps
                        you tap out of chaos. Block unwanted background noise up
                        to 35dB with its Hybrid Active Noise Cancellation. Make
                        your calls crystal clear with the power{" "}
                        <span className="redText">...Read More</span>
                     </p>
                  </div>
                  <div className="colors flex">
                     <div className="colorRing">
                        <div className="color1"></div>
                     </div>
                     <div className="color2"></div>
                     <div className="color3"></div>
                  </div>
                  <div className="launchesBtnDiv flex">
                     <button className="exploreBtn">EXPLORE NOW</button>
                     <button className="addToCartBtn">ADD TO CART</button>
                  </div>
               </div>
            </div>
            <div>
               <img
                  className="arrowSize"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/right-arrow_1.png?v=1642498059"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default NewLaunches;
