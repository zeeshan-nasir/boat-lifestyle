import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
   AiOutlineSearch,
   AiFillGift,
   AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Styles/navbar.css";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="preNavbar">
            <p className="preNavText">
               Hear sound the way it should be with Airdopes 115. Grab @ ₹1499
            </p>
         </div>
         <div className="mainNavbar flex">
            <div className="navLogo">
               <img
                  className="logo"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229"
                  alt=""
               />
            </div>
            <div className="navLinks flex">
               <div className="navLinksDiv flex">
                  <p>Shop</p>
                  <MdKeyboardArrowDown />
               </div>
               <div className="navLinksDiv flex">
                  <p>More</p>
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
               <CgProfile size={25} />
               <AiFillGift size={25} />
               <AiOutlineShoppingCart className="cartIcon" size={25} />
               <p className="cartCount flex">0</p>
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
