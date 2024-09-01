import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyListingsPage from './pages/PropertyListingsPage';
import BookingManagementPage from './pages/BookingManagementPage';
import Login from './pages/Login';
import Register from './pages/Register';
import CheckoutPage from './pages/CheckoutPage';
import { useSelector } from 'react-redux';

const App = () => {
  const properties = useSelector((state) => state.properties);
  const cartItems = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const PrivateRoute = ({ element }) => {
    return user.isLoggedIn ? element : <Navigate to="/login" replace />;
  };

  const PublicRoute = ({ element }) => {
    return user.isLoggedIn ? <Navigate to="/properties" replace /> : element;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage properties={properties} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/register" element={<PublicRoute element={<Register />} />} />

        {/* Private Routes */}
        <Route
          path="/properties"
          element={<PrivateRoute element={<PropertyListingsPage properties={properties} />} />}
        />
        <Route
          path="/cart"
          element={<PrivateRoute element={<BookingManagementPage cartItems={cartItems} />} />}
        />
        <Route
          path="/checkout"
          element={<PrivateRoute element={<CheckoutPage cartItems={cartItems} />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
