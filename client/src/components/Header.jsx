import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <NavLink to="/">RentEasy</NavLink>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
                        <li><NavLink to="/properties" className="hover:underline">Properties</NavLink></li>
                        <li><NavLink to="/cart" className="hover:underline">Cart</NavLink></li>
                        <li><NavLink to="/checkout" className="hover:underline">Checkout</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
