import { useEffect, useState } from "react"

export default function Home() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/api/products', {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                const json = await response.json()
                console.log(json)
                if (response.ok) {
                    // console.log("response is OK!")
                    setProducts(json)
                }
            } catch (error) {
                console.log(error)
            }

        }

        fetchProducts()
    }, [])
    return (
        <div className="home">
            <div className="products">
                {products && products.map((product) => (
                    <div key={product._id} className="product">
                        <div className="product-img">
                            <img src={product.image} alt="" />
                        </div>
                        <p >{product.name}</p>
                        <h6>{product.description}</h6>
                        <p>Price: ${product.price}</p>
                        <p>Rating:{product.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}