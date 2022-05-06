import { useEffect, useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [img, setImage] = useState();
    
    useEffect(() => {

        getData()

    }, []);

    const getData = () => {
        fetch("http://localhost:8080/products")
        .then((res) => res.json())
        .then(data => {
            setProducts(data)
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

    console.log(products)

    return (
        <div className="Products">
            <img className="topImage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683" alt="" />

            <div className="main">
                <h1 className="heading">Wireless Headphones</h1>

            <div className="filterAndSort">
                <div>
                    <div className="filter">
                        <FontAwesomeIcon icon={faSliders} />
                    <h3>Show Filters</h3>
                    </div>
                    <h3>{products.length} products</h3>
                </div>

                <div className="sortDiv">
                    <h3>Sort by</h3>
                    <select id="sort">
                        <option className="opt" value="featured">Featured</option>
                        <option className="opt" value="lowToHigh">Price, Low to High</option>
                        <option className="opt" value="highToLow">Price, High to Low</option>
                        <option className="opt" value="A-Z">Alphabetically, A-Z</option>
                        <option  className="opt" value="Z-A">Alphabetically, Z-A</option>
                    </select>
                </div>
            </div>

            <div className="products_container">
                {products.map((ele) => {
                    // {imageSetter(ele.img)}
                    return (
                        <div className="productCard">
                            <img  src={ele.img} alt="Sorry unable to picture" />
                            <div className="productInfo">
                                <h5>{ele.rating} ({ele.total_rating})</h5>
                                <h4>{ele.title}</h4>
                                <div className="price">
                                    <div>
                                        <h4>₹ {ele.price}</h4>
                                    <h6>₹ {ele.original_price}</h6>
                                    </div>
                                    <button>Add +</button>
                                </div>

                                <h5>{ele.colors} colors available</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}