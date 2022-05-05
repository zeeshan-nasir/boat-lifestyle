import { useEffect, useState} from "react"

export const Products = () => {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {

        getData()

    }, []);

    const getData = () => {
        fetch("http://localhost:5000/products")
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

    console.log(products)

    return (
        <div className="Products">
            <img className="topImage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683" alt="" />

            <div className="main">
                <h1>Wireless Headphones</h1>

            <div className="filterAndSort">
                <div>
                    <h3>Show Filters</h3>
                    <h3>{products.length} products</h3>
                </div>

                <select id="sort">
                    <option value="featured">Featured</option>
                    <option value="lowToHigh">Price, Low to High</option>
                    <option value="highToLow">Price, High to Low</option>
                    <option value="A-Z">Alphabetically, A-Z</option>
                    <option value="Z-A">Alphabetically, Z-A</option>
                </select>
            </div>

            <div className="products_container">
                {products.map((ele) => {
                    return (
                        <div className="productCard">
                            <img src={ele.img} alt="" />
                            <div className="productInfo">
                                <h5>{ele.rating} ({ele.total_rating})</h5>
                                <h4>{ele.title}</h4>
                                <div className="price">
                                    <h4>₹ {ele.price}</h4>
                                    <h6>₹ {ele.original_price}</h6>
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