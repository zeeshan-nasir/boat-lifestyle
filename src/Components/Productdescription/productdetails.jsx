import styled from "styled-components";
import star from "./Images/Star11.png";
import warranty from "./Images/image 116.png";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Faq from "./faq.jsx";
import Discription from "./Discription.jsx";

const Container = styled.div`
  width: 100%;
  top: 88px;
  left: 0px;
  background: linear-gradient(184.1deg, #292929 -0.53%, #010101 108.73%);

  & .main {
    width: 100%;
    display: flex;
   
    margin-top: 5%;
  }
  & .rigthSection {
    width: 50%;
    margin-top: 10%;
    margin-left: 16%;
    margin-bottom:5%;
  }
  & .topImage {
    width: 30%;
    margin-top: 10%;
    margin-bottom: 5%;
    margin-left:10%;
  }
  & .imageDiv {
    margin-top: 0%;
    width: 100%;
    background: gray;
    margin-left: 10%;
   

  }

  & .imageDiv img {
    width: 70%;
    margin-top: 10%;
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  & .name {
    overflow-y: hidden;

    left: 60.97%;
    top: 10%;
    font-weight: 600;
    font-size: 200%;
    line-height: 100%;
    color: #ffffff;
  }
  & .type {
    margin-top: 2%;
    overflow-y: hidden;
  
    left: 60.97%;
   font-weight: 600;
    font-size: 120%;
   
    color: #7c7c7c;
  }
  & .pricing {
  
    display: flex;
   
  }
  & .price {
    
    font-weight: 600;
    font-size: 40px;
  
    color: #ff0000;
  }
  & .discountPrice {
    padding:3%;
    font-size: 30px;
    font-weight: 500;
    text-decoration-line: line-through;
    color: #b4b4b4;
  }

  & .starContainer {
    display: flex;
    margin-top: 2%;
   
  }
  & .star {
    display: flex;
  }
  & .star > img {
    height: 20px;
  }
  & .reviews {
    margin-left: 1%;
   font-size: 80%;
    padding: .3%;
   color: #9b9b9b;

  }
  
  & .addToCart {
   text-align:center;
   padding:1.5%;
    width: 60%;
   font-weight:800;
    color: white;
    margin-top:5%;
    font-size: 100%;
    background-color: red;
  }
  & .save, .tax{
    color:white;
  }
  

  & .colorCircle {
     
    margin-top:3%;
    box-sizing: border-box;
    display: flex;
  }
  & .colorCircle > div {
    padding: 5px;
   width: 28px;
    height: 28px;
    border-radius:50%;
    margin-right: 15px;
  }
 
  & .warrantyImage {
   width:65%;
   margin-top: 2%;
   
    /* border: 1px solid red; */
  }
`;

export const ProductDetails = () => {
  const [btn, setBtn] = useState("ADD TO CART");

  const temp = {
    imageURLcolor1:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
    imageURLcolor2:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_600x.png?v=1640628318",
    productName: "boAt Watch Xtend‌",
    price: 2499,
    strikedPrice: 7990,
    Rating: 4.68,
    RatingCount: 34,
    itemCategory: "Smart watches",
    discountprice: "70%",
  };
  var color = ["black", "red", "white"];

  const [e, setE] = useState(temp);

  const starsArray = new Array(Math.floor(e.Rating)).fill(0);

  return (
    <div>
      <Container>
        <div className="main">
          <div className="topImage">
            <div className="imageDiv">
              <img src={e.imageURLcolor1} />
            </div>
          </div>

          <div className="rigthSection">
            <div className="name">{e.productName}</div>
            <div className="type">{e.itemCategory}</div>

            <div className="starContainer">
              <div className="star">
                {starsArray.map((el) => {
                  return <img src={star} />;
                })}
              </div>
              <div className="reviews">{e.RatingCount} Reviews</div>
            </div>

            <div className="colorCircle">
              {color.map((el) => (
                <div style={{ background: el }}></div>
              ))}
            </div>

            <div className="pricing">
              <p className="price">₹{Math.floor(e.price)}.00</p>
              <p className="discountPrice">
                ₹{e.strikedPrice}
                .00
              </p>
            </div>

            <div className="save">You save {e.discountprice}</div>
            <div className="tax">Inclusive all Tax</div>
        
            <div className="addToCart" onClick="">
              {btn}
            </div>
          <div  ><img className="warrantyImage" src={warranty} alt="warranty" /></div>  
          </div>
        </div>
      </Container>

      <Discription />
      <Faq />
    </div>
  );
};
