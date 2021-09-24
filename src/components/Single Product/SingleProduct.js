import React from 'react';
import './SingleProduct.css';
const SingleProduct = (props) => {
    console.log(props)
    const { img, name, price, seller, shipping, star, stock, features } = props.product;
    const allfeatures = [...features];
    console.log(allfeatures);
    console.log(img)
    return (
        <div className="single-cart">
            <div>
                <img src={img} alt="product-img" />
            </div>
            <div className="product-details">
                <div>
                    <h3>{name}</h3>
                    <p>by : {seller}</p>
                    <p>Price : {price}</p>
                    <button>add to cart</button>
                </div>
                <div>
                    <h5>Features</h5>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;