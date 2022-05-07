import { useEffect, useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faStar } from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/action";
import { sortProducts } from "../../Redux/Products/action";
import { addToCart } from "../../Redux/AddToCart/actions";
import { useNavigate } from "react-router";

export const Products = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const products = useSelector((store) => store.products.products)
    const [index, setIndex] = useState();
    const navigate = useNavigate();
    
    if(id === undefined) {
        id = "/"
    }

    const headings = {
        smart_watches : "Smart Watches",
        wireless_earbuds: "Wireless Earbuds",
        wireless_speakers : "Wireless Speakers",
        home_theatre : "Home Theatre System & Soundbars",
        wired_earphones : "Wired Earphones",
        mobile_accessories : "Mobile Accesories",
        limited_edition : "Limited Edition",
        grooming : "Misfit - Best Trimmer for Men"
    }


    const imgURL = {
        smart_watches : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smart-Watch_Catgry-web.jpg?v=1634717240",
        wireless_earbuds: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734",
        wireless_speakers : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone-Speakers_Catgry-web_5ddac427-ef95-4cc3-bcd7-5f08ab93359d.jpg?v=1634903645",
        home_theatre : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Aavante_category_web_1.jpg?v=1634903645",
        wired_earphones : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads-_Catgry_web.jpg?v=1634717143",
        mobile_accessories : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mobile_Accessories_web.jpg?v=1634903645",
        limited_edition : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Limited_edition_cat_web.jpg?v=1634903645",
        grooming : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/MISFIT-T200_Catgry_Web.jpg?v=1634806683"
    }
    
    useEffect(() => {

        getData()

    }, [id]);

    const getData = () => {
        fetch(`http://localhost:5000/products/${id}`)
        .then((res) => res.json())
        .then(data => {
            dispatch(getProducts(data.products))
        })
    }

    const dataToCart = (ele) => {
        const cart = JSON.parse(localStorage.getItem("cartBoat")) || [];

        cart.push(ele);

        localStorage.setItem("cartBoat", JSON.stringify(cart))

        alert(`- ${ele.productName} - added to your Cart`)

        dispatch(addToCart(ele))
    } 

    const navigateToDetails = () =>{
        navigate("/products/detail")
    }

    return (
        <div className="ga_Products">
            <img className="ga_topImage" src={id === "/" ? "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683": imgURL[id]} alt="" />

            <div className="ga_main">
                <h1 className="ga_heading">{id === "/" ? "All Products": headings[id]}</h1>

            <div className="ga_filterAndSort">
                <div>
                    <div className="ga_filter">
                        <FontAwesomeIcon icon={faSliders} />
                    <h3>Show Filters</h3>
                    </div>
                    <h3 id="ga_totalProducts">{products.length} products</h3>
                </div>

                <div className="ga_sortDiv">
                    <h3>Sort by</h3>
                    <select onChange={(ele) => {
                        dispatch(sortProducts(ele.target.value))
                    }} id="ga_sort">
                        <option className="opt" value="featured">Featured</option>
                        <option className="opt" value="price">Price, Low to High</option>
                        <option className="opt" value="price">Price, High to Low</option>
                        <option className="opt" value="productName">Alphabetically, A-Z</option>
                        <option  className="opt" value="productName">Alphabetically, Z-A</option>
                    </select>
                </div>
            </div>

            <div className="ga_products_container">
                {products.map((ele, ind) => {
                    return (
                        <div key={ind} className="ga_productCard">
                            <img onMouseOver={() => {
                                setIndex(ind)
                            }} onMouseOut={() => {
                                setIndex(-1);
                            }} src={ind === index ? ele.imageURLcolor2 : ele.imageURLcolor1} alt="" onClick={() => {
                                navigateToDetails()
                            }}/>
                            <div className="ga_productInfo">
                                <div className="ga_rating">
                                    <FontAwesomeIcon className="ga_star" icon={faStar} />
                                    <h5>{ele.Rating} ({ele.RatingCount})</h5>
                                </div>
                                <h4 onClick={() => {
                                    navigateToDetails();
                                }}>{ele.productName}</h4>
                                <div className="ga_price">
                                    <div>
                                        <h4>₹ {ele.price}</h4>
                                    <h6>₹ {ele.strikedPrice}</h6>
                                    </div>
                                    <button onClick={() => {
                                        dataToCart(ele)
                                    }}>Add +</button>
                                </div>

                                <h5>2 colors available</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}