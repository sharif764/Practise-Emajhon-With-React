import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Calculation from '../Product-Calculation/Calculation';
import './Shop.css';
const Shop = (props) => {
    const enentHandler = () => {

    }
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <section className="product-calucation-all">
            <div className="all-product">
                <Cart products={products}></Cart>
            </div>
            <div className="product-calculation">
                <Calculation products={products}></Calculation>
            </div>
        </section>
    );
};

export default Shop;