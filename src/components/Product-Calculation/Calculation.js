import React from 'react';

const Calculation = (props) => {
    const products = props.product;
    let priceTotal = 0;
    for (const product of products) {
        priceTotal += product.price;
    }
    console.log(priceTotal)
    return (
        <div>
            <h2>Items Ordered : {products.length}</h2>
            <h2>Price : {priceTotal.toFixed(2)}</h2>
        </div>
    );
};
export default Calculation;