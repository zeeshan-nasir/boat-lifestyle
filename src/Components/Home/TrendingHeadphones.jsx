import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingHeadphones = ({ handleDispatch }) => {
   const [useClass, setUseClass] = useState("first");
   const [data, setData] = useState([]);

   const getData = async () => {
      let fetched = await fetch(
         "http://localhost:5000/products/wired_earphones"
      );
      fetched = await fetched.json();
      setData(fetched.products.slice(0, 4));
   };

   useEffect(() => {
      getData();
   }, []);

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
