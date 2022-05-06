import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const LoginPopup = ({ setLogin, login }) => {
   return (
      <div className="loginPopup">
         <div className="flex popupUpperDiv">
            <p className="popupText">Hi boAthead!</p>
            <ImCross onClick={() => setLogin(!login)} size={13} />
         </div>
         <Link to={"/login"}>
            <button onClick={() => setLogin(!login)} className="popUpBtn">
               Login
            </button>
         </Link>
      </div>
   );
};

export default LoginPopup;
