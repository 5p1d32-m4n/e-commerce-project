export default function ProductDetails({ product }) {
    return (
        <div key={product._id} className="product-card">
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="product-details">
                <div className="product-data">
                    <div className="product-name">
                        {product.name}
                    </div>
                    <div className="product-info">
                        <p className="product-price"><strong>Price: $ </strong>{product.price}</p>
                        <p className="product-rating"><strong>Rating: </strong>{product.rating}★</p>
                    </div>
                </div>
            </div>
        </div>
    )
}