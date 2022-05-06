import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Gaming = () => {
   const [data, setData] = useState([]);

   const getData = async () => {
      let fetched = await fetch(
         "http://localhost:5000/products/limited_edition"
      );
      fetched = await fetched.json();
      setData(fetched.products.slice(0, 4));
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Gaming</h1>

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
                           <button className="cardBtn">ADD +</button>
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

export default Gaming;
