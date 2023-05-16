import { useEffect, useState } from "react"
import ProductDetails from "../components/ProductCard"

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
            <div className="products-grid">
                {products && products.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}