import React from "react";
import { ImCross } from "react-icons/im";

const CartPopup = ({ cart, setCart }) => {
   return (
      <div className="cart">
         <div className="cartHeader flex">
            <p>Your Cart</p>
            <ImCross onClick={() => setCart(!cart)} size={15} />
         </div>
         <div className="cartNav">
            <p className="cartText">
               Free Shipping sitewide | <span className="cartTextBold">Cash On Delivery</span> available
               for order:  value upto <span className="cartTextBold">₹3000</span>
            </p>
         </div>
         <div className="cartItems">
            <div className="mappingItems"></div>
            <div className="btmCartDiv">
               <div className="flex">
                  <p className="shippingText">Shipping:</p>
                  <p>FREE</p>
               </div>
               <div className="flex">
                  <p className="shippingText">Total:</p>
                  <p>Rs. 1,099.00</p>
               </div>
               <div className="flex">
                  <button className="cartPayBtn">Pay Via UPI/COD</button>
                  <button className="cartCardBtn">Pay Via Card</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartPopup;
