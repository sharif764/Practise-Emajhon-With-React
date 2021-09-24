import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Calculation from '../Product-Calculation/Calculation';
import './Shop.css';
// main Shop function
const Shop = (props) => {
    // button event handler function
    const handleAddtoCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);

    };

    const [cart, setCart] = useState([]);
    console.log(cart);
    // useState 
    const [products, setProducts] = useState([]);
    // useEffect
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <section className="product-calucation-all">
            <div className="all-product">
                <Cart products={products} handleAddtoCart={handleAddtoCart}></Cart>
            </div>
            <div className="product-calculation">
                <Calculation products={products} product={cart}></Calculation>
            </div>
        </section>
    );
};
export default Shop;