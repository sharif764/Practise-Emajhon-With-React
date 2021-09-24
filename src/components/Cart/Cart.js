import React from 'react';
import SingleProduct from '../Single Product/SingleProduct';

const Cart = (props) => {
    // const handleAddtoCart = props.handleAddtoCart;
    const products = props.products;
    return (
        <section>
            {products.map(product => <SingleProduct handleAddtoCart={props.handleAddtoCart} key={product.key} product={product}></SingleProduct>)}
        </section>
    );
};

export default Cart;