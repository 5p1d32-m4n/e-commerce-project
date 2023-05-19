import { Link } from "react-router-dom"
export default function () {
    return (
        <div className="category-card">
            <div className="category-card--image">
                <img src={""} alt="Category" />
            </div>
            <div className="category-card--name">
                <p>
                    <Link to={""}>
                        Category 1
                    </Link>
                </p>
            </div>
        </div>
    )
}

/**TODO:
 * 
 * 1.   Build category card with 420 x 470 images
 * 2.   Use baked in images, don't over complicate your life with the API.
 * 3.   Implement CSS for shaded box and light text.
 * 
 * 
 */