import { useEffect, useState } from "react"
import ProductDetails from "../components/ProductCard"
import OfferBanner from "../components/OfferBanner"
import DepartmentsCard from "../components/DepartmentsCard"

export default function Home() {
    const [products, setProducts] = useState(null)
    const [departments, setDepartments] = useState(null)
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
                if (response.ok) {
                    setProducts(json)
                }
            } catch (error) {
                console.log(error)
            }

        }
        const fetchDepartments = async () => {
            try {
                const departments = await fetch('http://127.0.0.1:3000/api/departments', {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await departments.json()
                console.log(`Departments json: ${json}`)
                if (departments.ok) {
                    setDepartments(json)
                }
            } catch (error) {
                console.log(`Error fetching Departments: ${error}`)
            }
        }

        fetchProducts()
        fetchDepartments()
    }, [])
    return (
        <div className="home">
            <OfferBanner offer={'50'} />
            {/* Implement flagship Offers */}
            <div className="flagship"></div>
            <div className="department-carousel">
                {departments && departments.map((department) => {
                    <DepartmentsCard key={department._id} department={department} />
                })}
            </div>
            <div className="products-grid">
                {products && products.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}