import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingEarphones = ({ handleDispatch }) => {
   const [useClass, setUseClass] = useState("first");
   // const [data, setData] = useState([]);

   // const getData = async () => {
   //    let fetched = await fetch(
   //       "http://localhost:5000/products/wireless_earbuds"
   //    );
   //    fetched = await fetched.json();
   //    console.log(fetched.products.slice(0, 4));
   //    setData(fetched.products.slice(0, 4));
   // };

   // useEffect(() => {
   //    getData();
   // }, []);

   let data = [
      {
         _id: "6272991704f82bb9d1caa7ba",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_600x.png?v=1642405569",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
         productName: "boAt Airdopes 131 - Wireless Earbuds",
         price: 2449,
         strikedPrice: 6990,
         Rating: 4.72,
         RatingCount: 572,
         itemCategory: "Wireless Earbuds",
         discountprice: "65%",
      },
      {
         _id: "6272991704f82bb9d1caa7bb",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_600x.png?v=1625046016",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a1b32b3b-7ed4-4b58-ade4-088ee08914c4_600x.png?v=1625046016",
         productName: "BOAT Airdopes 441 - Wireless Earbuds",
         price: 1999,
         strikedPrice: 5999,
         Rating: 4.8,
         RatingCount: 210,
         itemCategory: "Wireless Earbuds",
         discountprice: "67%",
      },
      {
         _id: "6272991704f82bb9d1caa7bc",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_blue_600x.png?v=1641801490",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_red_600x.png?v=1641467014",
         productName: "boAt Airdopes 451v2",
         price: 2199,
         strikedPrice: 5999,
         Rating: 5,
         RatingCount: 18,
         itemCategory: "Wireless Earbuds",
         discountprice: "63%",
      },
      {
         _id: "6272991704f82bb9d1caa7bd",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/product-Image_600x.png?v=1625813323",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/101_600x.png?v=1644562316",
         productName: "Airdopes 101 Made In India",
         price: 1499,
         strikedPrice: 2990,
         Rating: 4.4,
         RatingCount: 360,
         itemCategory: "Wireless Earbuds",
         discountprice: "50%",
      },
   ];

   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Trending Earphones</h1>
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

export default TrendingEarphones;
