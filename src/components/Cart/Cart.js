import React from 'react';
import SingleProduct from '../Single Product/SingleProduct';

const Cart = (props) => {

    const products = props.products;
    return (
        <section>
            {products.map(product => <SingleProduct key={product.key} product={product}></SingleProduct>)}
        </section>
    );
};

export default Cart;