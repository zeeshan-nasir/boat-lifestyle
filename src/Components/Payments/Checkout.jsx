import React from "react";
import "../Styles/checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
   return (
      <div className="backgroundColor">
         <div className="checkoutDiv">
            <div className="checkoutHeadDiv">
               <h2 className="checkoutHead">Delivery Address</h2>
            </div>
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" />

            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" />

            <label htmlFor="">Address</label>
            <input type="text" name="" id="" />

            <label htmlFor="">City</label>
            <input type="text" name="" id="" />

            <label htmlFor="">State</label>
            <input type="text" name="" id="" />

            <label htmlFor="">Pincode</label>
            <input type="text" name="" id="" />
            <Link to={"/payments"}>
               <button className="checkoutBtn">Submit</button>
            </Link>
         </div>
      </div>
   );
};

export default Checkout;
