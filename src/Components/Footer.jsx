import React from "react";
import "./Styles/footer.css";
import {
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaYoutube,
   FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
   return (
      <div className="footer">
         <div className="flex firstFooterDiv">
            <div className="sendEmailBox">
               <div>
                  <img
                     className="footerLogo"
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x.png?v=1600753267"
                     alt=""
                  />
               </div>
               <p className="subscribeText">
                  Subscribe to email alerts. We promise not to spam your inbox.
               </p>
               <div className="footerInputDiv flex">
                  <input
                     type="text"
                     className="footerInput"
                     placeholder="Email Address*"
                  />
                  <button className="footerBtn">SUBSCRIBE</button>
               </div>
               <div className="mediaLinks flex">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaYoutube />
                  <FaLinkedinIn />
               </div>
            </div>
            <div className="footerLinks flex">
               <div className="footerCol">
                  <p className="linksHeader">SHOP</p>
                  <div className="hideLinks">
                     <p>True Wireless Earbuds</p>
                     <p>Wireless Headphones</p>
                     <p>Wired Headphones</p>
                     <p>Wireless Speakers</p>
                     <p>Home Audio</p>
                     <p>Mobile Accessories</p>
                     <p>Smart Watches</p>
                     <p>Misfit</p>
                  </div>
               </div>
               <div className="footerCol">
                  <p className="linksHeader">HELP</p>
                  <div className="hideLinks">
                     <p>Track Your Order</p>
                     <p>Warranty & Support</p>
                     <p>Return Policy</p>
                     <p>Service Centers</p>
                     <p>Bulk Orders</p>
                     <p>FAQs</p>
                     <p>Why Buy Direct</p>
                     <p>Rock In India</p>
                  </div>
               </div>
               <div className="footerCol">
                  <p className="linksHeader">COMPANY</p>
                  <div className="hideLinks">
                     <p>About boAt</p>
                     <p>News</p>
                     <p>Read Our Blog</p>
                     <p>Careers</p>
                     <p>Security</p>
                     <p>Terms of Service</p>
                     <p>Privacy Policy</p>
                     <p>Investor Relations</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="midFooter flex">
            <div className="paymentsImages">
               <img className="imageSize"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054"
                  alt=""
               />
            </div>
            <div className="flex linksToStores">
               <h4 className="download">DOWNLOAD THE APP</h4>
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293"
                  alt=""
               />
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293"
                  alt=""
               />
            </div>
         </div>
         <div className="copyright">
            <p>© 2022 Imagine Marketing Limited. All Rights Reserved.</p>
         </div>
      </div>
   );
};

export default Footer;
