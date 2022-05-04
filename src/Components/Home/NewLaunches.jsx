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
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/new-launch-500-anc.jpg?v=1650021089"
                     alt=""
                  />
                  <div className="launchesDataDiv">
                     <p>Wireless Earbuds</p>
                     <p>Airdopes 500 ANC</p>
                     <p>Special launch price</p>
                     <p>Rs. 3999</p>
                     <div>
                        <p>Description</p>
                        <p>Features</p>
                     </div>
                     <p>
                        Focus on what matters with Airdopes 500 ANC that helps
                        you tap out of chaos. Block unwanted background noise up
                        to 35dB with its Hybrid Active Noise Cancellation. Make
                        your calls crystal clear with the power of Quad Mics and
                        ENx™ Technology. With a promising 28 HRS of playback, it
                        is time to listen to the #SoundThatMatters with Airdopes
                        500 ANC.
                     </p>
                     <div className="colors">
                        <div></div>
                        <div></div>
                        <div></div>
                     </div>
                     <div className="launchesBtnDiv">
                        <button className="exploreBtn">EXPLORE NOW</button>
                        <button className="addToCartBtn">ADD TO CART</button>
                     </div>
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
