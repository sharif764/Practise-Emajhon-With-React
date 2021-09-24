import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';
const Shop = (props) => {
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

            </div>
        </section>
    );
};

export default Shop;