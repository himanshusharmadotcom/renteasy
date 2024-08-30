import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyListingsPage from './pages/PropertyListingsPage';
import BookingManagementPage from './pages/BookingManagementPage';
import CheckoutPage from './pages/CheckoutPage';
import { useSelector } from 'react-redux';

const App = () => {
  const properties = useSelector((state) => state.properties);
  const cartItems = useSelector((state) => state.cart);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage properties={properties} />} />
        <Route path="/properties" element={<PropertyListingsPage properties={properties} />} />
        <Route
          path="/cart"
          element={<BookingManagementPage cartItems={cartItems} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
