import { useEffect, useState, useRef } from "react"
import ProductDetails from "../components/ProductCard"
import OfferBanner from "../components/OfferBanner"
import DepartmentsCard from "../components/DepartmentsCard"
import Carousel from "../components/Carousel"



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
            <div className="flagship"></div>
            <div className="department-carousel-container">
                <div className="department-carousel">
                    {/* Carousel goes here */}
                    <Carousel objects={departments} />
                    {/* <ul className="carousel-list" ref={listRef}>
                        {departments && departments.map((department) => (
                            <li key={department
                                ._id}>
                                <DepartmentsCard key={department._id} department={department} />
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
            <div className="products-grid">
                {products && products.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}