import { useEffect, useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faStar } from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom"

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [img, setImage] = useState();
    let {id} = useParams();
    
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

    }, []);

    const getData = () => {
        fetch(`http://localhost:5000/products/${id}`)
        .then((res) => res.json())
        .then(data => {
            setProducts(data.products)
        })

        // if(products) {
        //     return function cleanup () {
        //     console.log("Hello")
        // }
        // }
    }

    // const imageSetter =(img) =>{
    //     setImage(img)
    // }

    // console.log(products)

    return (
        <div className="ga_Products">
            <img className="ga_topImage" src={id == "/" ? "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683": imgURL[id]} alt="" />

            <div className="ga_main">
                <h1 className="ga_heading">{id == "/" ? "All Products": headings[id]}</h1>

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
                    <select id="ga_sort">
                        <option className="opt" value="featured">Featured</option>
                        <option className="opt" value="lowToHigh">Price, Low to High</option>
                        <option className="opt" value="highToLow">Price, High to Low</option>
                        <option className="opt" value="A-Z">Alphabetically, A-Z</option>
                        <option  className="opt" value="Z-A">Alphabetically, Z-A</option>
                    </select>
                </div>
            </div>

            <div className="ga_products_container">
                {products.map((ele, ind) => {
                    // {imageSetter(ele.img)}
                    return (
                        <div key={ind} className="ga_productCard">
                            <img  src={ele.imageURLcolor1} alt="Sorry unable to picture" />
                            <div className="ga_productInfo">
                                <div className="ga_rating">
                                    <FontAwesomeIcon className="ga_star" icon={faStar} />
                                    <h5>{ele.Rating} ({ele.RatingCount})</h5>
                                </div>
                                <h4>{ele.productName}</h4>
                                <div className="ga_price">
                                    <div>
                                        <h4>₹ {ele.price}</h4>
                                    <h6>₹ {ele.strikedPrice}</h6>
                                    </div>
                                    <button>Add +</button>
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