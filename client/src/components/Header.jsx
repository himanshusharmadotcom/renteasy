import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logoutUser } from '../redux/slices/userSlice';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

    const handleSignOut = async () => {
        try {
            const response = await axios.get('/api/auth/logout');
            console.log(response);

            if (!(response.status >= 200 && response.status < 300)) {
                console.log('An error occurred');
                return;
            }
            dispatch(logoutUser());
            console.log('User logged out');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    const menuItems = (
        <div className="flex flex-col p-4">
            <NavLink to="/" className="text-black text-lg mb-4" onClick={toggleMenu}>
                Home
            </NavLink>
            <NavLink to="/properties" className="text-black text-lg mb-4" onClick={toggleMenu}>
                Properties
            </NavLink>
            <NavLink to="/cart" className="text-black text-lg mb-4" onClick={toggleMenu}>
                Cart
            </NavLink>
            <NavLink to="/checkout" className="text-black text-lg mb-4" onClick={toggleMenu}>
                Checkout
            </NavLink>
            {user.isLoggedIn && (
                <button
                    onClick={() => {
                        handleSignOut();
                        toggleMenu();
                    }}
                    className="bg-blue-600 text-lg text-white p-3 rounded "
                >
                    Sign Out
                </button>
            )}
        </div>
    );

    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <NavLink to="/" className="text-white">RentEasy</NavLink>
                </h1>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <NavLink to='/login' className='mr-4'>
                        {user.isLoggedIn ? `Hi, ${user.name}` : 'Sign In'}
                    </NavLink>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        edge="start"
                        onClick={toggleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                {/* Desktop Navigation Menu */}
                <nav className="hidden md:flex space-x-4">
                    <NavLink to="/" className="hover:underline">Home</NavLink>
                    <NavLink to="/properties" className="hover:underline">Properties</NavLink>
                    <NavLink to="/cart" className="hover:underline">Cart</NavLink>
                    <NavLink to="/checkout" className="hover:underline">Checkout</NavLink>
                    <NavLink to='/login'>
                        {user.isLoggedIn ? `Hi, ${user.name}` : 'Sign In'}
                    </NavLink>
                    {user.isLoggedIn && (
                        <NavLink to='' onClick={handleSignOut}>
                            Sign Out
                        </NavLink>
                    )}
                </nav>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={menuOpen}
                onClose={toggleMenu}
                PaperProps={{ sx: { width: '70%', backgroundColor: 'white' } }}
            >
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-2xl font-bold text-blue-600">RentEasy</h1>
                    <IconButton onClick={toggleMenu}>
                        <CloseIcon />
                    </IconButton>
                </div>
                {menuItems}
            </Drawer>
        </header>
    );
};

export default Header;
