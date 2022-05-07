import React from "react";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import "./Styles/cart.css";
import { Link } from "react-router-dom";

const CartPopup = ({ cart, setCart }) => {
   const cartItems = useSelector((store) => store.cart.data);

   return (
      <div className="cart">
         <div className="cartHeader flex">
            <p>Your Cart</p>
            <ImCross onClick={() => setCart(!cart)} size={15} />
         </div>
         <div className="cartNav">
            <p className="cartText">
               Free Shipping sitewide |{" "}
               <span className="cartTextBold">Cash On Delivery</span> available
               for order value upto <span className="cartTextBold">₹3000</span>
            </p>
         </div>
         <div className="cartItems">
            <div className="mappingItems">
               {cartItems.map((e, i) => {
                  return (
                     <div className="flex cartCard" key={i}>
                        <div>
                           <img
                              className="smallCartImg"
                              src={e.imageURLcolor1}
                              alt=""
                           />
                        </div>
                        <div className="smallCartDivRight">
                           <p className="smallCartTitle">{e.productName}</p>
                           <p className="smallCartPrice">
                              Rs. {e.price}.00{" "}
                              <span className="strPriceCart">
                                 {" "}
                                 Rs. {e.strikedPrice}.00
                              </span>
                           </p>
                        </div>
                        <div className="trashCan">
                           <FiTrash2 size={18} />
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="btmCartDiv">
               <div className="flex">
                  <p className="shippingText">Shipping:</p>
                  <p>FREE</p>
               </div>
               <div className="flex">
                  <p className="shippingText">Total:</p>
                  <p>
                     Rs.{" "}
                     {cartItems.reduce((sum, item) => {
                        return sum + item.price;
                     }, 0)}
                     .00
                  </p>
               </div>
               <div className="flex">
                  <button className="cartPayBtn">Pay Via UPI/COD</button>
                  <Link to={"/checkout"}>
                     <button
                        onClick={() => setCart(!cart)}
                        className="cartCardBtn"
                     >
                        Pay Via Card
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartPopup;
