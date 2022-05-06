import React from "react";
import { Link } from "react-router-dom";

const Payments = () => {
   return (
      <div className="backgroundColorPayment">
         <div className="checkoutDiv">
            <div className="checkoutHeadDiv">
               <h2 className="checkoutHead">Payment Details</h2>
            </div>
            <div className="formDataDiv flex">
               <label htmlFor="">Card Name</label>
               <input type="text" name="" id="" />
            </div>
            <div className="formDataDiv flex">
               <label htmlFor="">Card Number</label>
               <input type="number" name="" id="" />
            </div>
            <div className="formDataDiv flex">
               <label htmlFor="">CVV</label>
               <input type="number" name="" id="" />
            </div>
            <div className="formDataDiv flex">
               <label htmlFor="">Expiry date</label>
               <input type="date" name="" id="" />
            </div>
            <div className="checkoutHeadDiv">
               <Link to={"/otp"}>
                  <button className="checkoutBtn">Submit</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Payments;
