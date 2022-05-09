import React from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
   const navigate = useNavigate();

   return (
      <div className="backgroundColorOtp">
         <div className="checkoutDivOtp">
            <div className="checkoutHeadDiv">
               <h2 className="checkoutHead">Enter OTP</h2>
            </div>
            <input type="text" name="" id="" />
            <button onClick={() => navigate("/")} className="checkoutBtn">
               Submit
            </button>
         </div>
      </div>
   );
};

export default Otp;
