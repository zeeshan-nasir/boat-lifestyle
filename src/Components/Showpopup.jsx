import React from "react";
import { Link } from "react-router-dom";

const Showpopup = () => {
   return (
      <div className="showPopup">
         <Link to={"/products/wireless_earbuds"}>
            <img className="firstLinkedImg"
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_480x.png?v=1612338251"
               alt=""
            />
         </Link>
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387"
            alt=""
         />
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_1196x.jpg?v=1648546494"
            alt=""
         />
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356"
            alt=""
         />
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436"
            alt=""
         />
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897"
            alt=""
         />
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_1196x.jpg?v=1648545875"
            alt=""
         />
         <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_1242x.png?v=1615033153"
            alt=""
         />
      </div>
   );
};

export default Showpopup;