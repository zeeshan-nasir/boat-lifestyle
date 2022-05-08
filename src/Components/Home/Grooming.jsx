// import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Grooming = ({ handleDispatch }) => {
   // const [data, setData] = useState([]);

   // const getData = async () => {
   //    let fetched = await fetch(
   //       "http://localhost:5000/products/grooming"
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
         _id: "6272991704f82bb9d1caa802",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_efb2d946-02c5-412b-bb86-ce83807d2318_600x.png?v=1630646783",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
         productName: "Misfit T50 Lite",
         price: 879,
         strikedPrice: 1999,
         Rating: 4.4,
         RatingCount: 47,
         itemCategory: "Misfit - Best Trimmer for Men",
         discountprice: "56%",
      },
      {
         _id: "6272991704f82bb9d1caa803",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/907e7c9d-4373-4809-a3e8-efe5bb1e7c7f_600x.png?v=1625045409",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_600x.png?v=1630060654",
         productName: "Misfit T50 Trimmer",
         price: 989,
         strikedPrice: 2990,
         Rating: 4.1,
         RatingCount: 117,
         itemCategory: "Misfit - Best Trimmer for Men",
         discountprice: "60%",
      },
      {
         _id: "6272991704f82bb9d1caa804",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/963d0725-90b9-42a4-9fcc-a842968cfee4_600x.png?v=1625045778",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
         productName: "Misfit T200",
         price: 1649,
         strikedPrice: 3999,
         Rating: 4.56,
         RatingCount: 137,
         itemCategory: "Misfit - Best Trimmer for Men",
         discountprice: "56%",
      },
      {
         _id: "6272991704f82bb9d1caa805",
         imageURLcolor1:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_600x.png?v=1630646486",
         imageURLcolor2:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
         productName: "Misfit T30 Trimmer",
         price: 769,
         strikedPrice: 1490,
         Rating: 4.83,
         RatingCount: 298,
         itemCategory: "Misfit - Best Trimmer for Men",
         discountprice: "49%",
      },
   ];

   return (
      <div className="topSellersDiv">
         <h1 className="headingText">Grooming</h1>

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

export default Grooming;
