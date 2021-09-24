import React from 'react';
import Features from '../Features/Features';
import './SingleProduct.css';
const SingleProduct = (props) => {

    const { img, name, price, seller, features } = props.product;
    // const allfeatures = [...features];

    return (
        <div className="single-cart">
            <div>
                <img src={img} alt="product-img" />
            </div>

            <div>
                <h1>{name}</h1>
                <div className="product-details">

                    <div>

                        <p>by : {seller}</p>
                        <p>Price : {price}</p>
                        <button className="button" onClick={() => {
                            props.handleAddtoCart(props.product)
                        }}>add to cart</button>
                    </div>
                    <div>
                        <h5>Features</h5>
                        {features.map(singleFeature => <Features features={singleFeature}></Features>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;