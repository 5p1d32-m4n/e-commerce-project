export default function ProductDetails({ product }) {
    return (
        <div key={product._id} className="product">
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>
            <p className="product-name">{product.name}</p>
            <h6>{product.description}</h6>
            <p className="product-price"><strong>Price: $ </strong>{product.price}</p>
            <p className="product-rating"><strong>Rating: </strong>{product.rating}</p>
        </div>
    )
}