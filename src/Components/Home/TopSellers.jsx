import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TopSellers = ({ handleDispatch }) => {
   const [useClass, setUseClass] = useState("first");
   // const [data, setData] = useState([]);

   // const getData = async () => {
   //    let fetched = await fetch("http://localhost:5000/products/smart_watches");
   //    fetched = await fetched.json();
   //    console.log(fetched.products.slice(0, 4));
   //    setData(fetched.products.slice(0, 4));
   // };

   let data = [
      {
         _id: "6272991704f82bb9d1caa7ae",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_600x.png?v=1640628318",
         productName: "boAt Watch Xtend‌",
         price: 2499,
         strikedPrice: 7990,
         Rating: 4.68,
         RatingCount: 34,
         itemCategory: "Smart watches",
         discountprice: "70%",
      },
      {
         _id: "6272991704f82bb9d1caa7af",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_maroon_9b2c008c-1cf9-49e3-988d-3cb43a456d80_600x.png?v=1648108782",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_600x.png?v=1648108782",
         productName: "Watch Wave Lite",
         price: 2199,
         strikedPrice: 6990,
         Rating: 4.5,
         RatingCount: 48,
         itemCategory: "Smart watches",
         discountprice: "69%",
      },
      {
         _id: "6272991704f82bb9d1caa7b0",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4d128bbd-a1e7-4045-a5c5-25c744f3133f_600x.png?v=1647765303",
         productName: "Watch Wave Pro",
         price: 2799,
         strikedPrice: 6990,
         Rating: 4.68,
         RatingCount: 34,
         itemCategory: "Smart watches",
         discountprice: "60%",
      },
      {
         _id: "6272991704f82bb9d1caa7b1",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_600x.png?v=1625046216",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8f01d1e9-48f4-4e55-886d-0b255b9bbf24_600x.png?v=1625045855",
         productName: "boAt Storm",
         price: 2499,
         strikedPrice: 5990,
         Rating: 4.79,
         RatingCount: 757,
         itemCategory: "Smart watches",
         discountprice: "58%",
      },
   ];

   // useEffect(() => {
   //    getData();
   // }, []);

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
            {data.map((e) => {
               return (
                  <div key={e._id} className="card">
                     <div className="imageDiv">
                        <img src={e.imageURLcolor1} alt="" />
                     </div>
                     <div className="dataDiv">
                        <p className="reviewsDiv">
                           <AiFillStar />
                           {e.Rating} ({e.RatingCount} reviews)
                        </p>
                        <p className="title">{e.productName}</p>
                        <div className="priceDiv flex">
                           <div className="flex">
                              <p className="price">₹ {e.price}</p>
                              <p className="strPrice">₹ {e.strikedPrice}</p>
                           </div>
                           <button
                              onClick={() => handleDispatch(e)}
                              className="cardBtn"
                           >
                              ADD +
                           </button>
                        </div>
                        <ul className="list">
                           <li>Colour variants for every style</li>
                           <li>Fast Charge in just 15 minutes</li>
                           <li>Ace your workouts with IPX5 rating</li>
                        </ul>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default TopSellers;
