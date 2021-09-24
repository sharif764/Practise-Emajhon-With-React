import React from 'react';
import './Header.css';
import logo from '../../logo.ico';

const Header = () => {
    return (
        <div className="headein">
            <div>
                <img src={logo} alt="hii" className="icon-img" />
            </div>
            <div>
                <nav>
                    <a href="https://www.w3schools.com">Shop</a>
                    <a href="https://www.w3schools.com">Order Review</a>
                    <a href="https://www.w3schools.com">Manage Inventory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;