import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
   AiOutlineSearch,
   AiFillGift,
   AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Styles/navbar.css";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import CartPopup from "./CartPopup";
import { useSelector } from "react-redux";
import MorePopup from "./MorePopup";
import Showpopup from "./Showpopup";

const Navbar = () => {
   const [login, setLogin] = useState(false);
   const [cart, setCart] = useState(false);
   const [more, setMore] = useState(false);
   const [show, setShow] = useState(false);

   let cartLen = useSelector((store) => store.cart.data);

   return (
      <div className="navbar">
         <div className="preNavbar">
            <p className="preNavText">
               Hear sound the way it should be with Airdopes 115. Grab @ ₹1499
            </p>
         </div>
         <div className="mainNavbar flex">
            <div className="navLogo">
               <Link to={"/"}>
                  <img
                     className="logo"
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229"
                     alt=""
                  />
               </Link>
            </div>
            <div className="navLinks flex">
               <div className="navLinksDiv flex">
                  <p
                     onClick={() => setShow(!show)}
                     className="bottomAnimation shopHover"
                  >
                     Shop
                  </p>
                  {show ? <Showpopup show={show} setShow={setShow} /> : null}
                  <MdKeyboardArrowDown />
               </div>
               <div className="navLinksDiv flex">
                  <p
                     onClick={() => setMore(!more)}
                     className="bottomAnimation moreHover"
                  >
                     More
                  </p>
                  {more ? <MorePopup /> : null}
                  <MdKeyboardArrowDown />
               </div>
            </div>
            <div className="navSearch flex">
               <div className="searchBar flex">
                  <AiOutlineSearch
                     className="searchIcon"
                     color="black"
                     size={18}
                     bo
                  />
                  <input
                     className="searchInput"
                     type="text"
                     placeholder="Search..."
                  />
               </div>
               <div className="iconsDiv flex">
                  <CgProfile onClick={() => setLogin(!login)} size={25} />
                  {login ? (
                     <LoginPopup setLogin={setLogin} login={login} />
                  ) : null}
                  <AiFillGift size={25} />
                  <AiOutlineShoppingCart
                     className="cartIcon"
                     size={25}
                     onClick={() => setCart(!cart)}
                  />
                  {cart ? <CartPopup cart={cart} setCart={setCart} /> : null}
                  <p onClick={() => setCart(!cart)} className="cartCount flex">
                     {cartLen.length}
                  </p>
               </div>
            </div>
         </div>

         {/* Small screen navbar */}

         <div className="smallScreenSearch flex">
            <div className="smallScreenSearchBar flex">
               <AiOutlineSearch
                  className="searchIcon"
                  color="black"
                  size={18}
                  bo
               />
               <input
                  className="smallSearchInput"
                  type="text"
                  placeholder="Search..."
               />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
