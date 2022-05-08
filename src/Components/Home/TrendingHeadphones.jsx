import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingHeadphones = ({ handleDispatch }) => {
   const [useClass, setUseClass] = useState("first");
   // const [data, setData] = useState([]);

   // const getData = async () => {
   //    let fetched = await fetch(
   //       "http://localhost:5000/products/wired_earphones"
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
         _id: "6272991704f82bb9d1caa7de",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_600x.png?v=1625046259",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/04981d98-f010-4553-9ba2-97c9a36fef4e_600x.png?v=1625046259",
         productName: "boAt BassHeads 100",
         price: 349,
         strikedPrice: 999,
         Rating: 4.73,
         RatingCount: 303,
         itemCategory: "Wired Earphones",
         discountprice: "65%",
      },
      {
         _id: "6272991704f82bb9d1caa7df",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
         productName: "boAt BassHeads 103",
         price: 349,
         strikedPrice: 1290,
         Rating: 4.74,
         RatingCount: 345,
         itemCategory: "Wired Earphones",
         discountprice: "73%",
      },
      {
         _id: "6272991704f82bb9d1caa7e0",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e51a6a86-ed55-4a8b-ad4b-71ec48d53791_600x.png?v=1625046491",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/dbe50eeb-e3ee-4036-97fe-2e25850563b9_600x.png?v=1625046491",
         productName: "TRebel BassHeads 152",
         price: 449,
         strikedPrice: 1290,
         Rating: 5,
         RatingCount: 5,
         itemCategory: "Wired Earphones",
         discountprice: "65%",
      },
      {
         _id: "6272991704f82bb9d1caa7e1",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_600x.png?v=1634371640",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint-green_600x.png?v=1634371631",
         productName: "TRebel BassHeads 100",
         price: 399,
         strikedPrice: 999,
         Rating: 4.6,
         RatingCount: 67,
         itemCategory: "Wired Earphones",
         discountprice: "60%",
      },
   ];

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

export default TrendingHeadphones;
