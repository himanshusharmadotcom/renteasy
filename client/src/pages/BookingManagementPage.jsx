import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartOverview from '../components/CartOverview';
import { removeFromCart, updateCartQuantity } from '../redux/slices/cartSlice';

const BookingManagementPage = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Handle removing an item from the cart
  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Handle updating the quantity of an item in the cart
  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateCartQuantity({ id: itemId, quantity: newQuantity }));
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <CartOverview 
          cartItems={cartItems} 
          onRemove={handleRemove} 
          onUpdateQuantity={handleUpdateQuantity} 
        />
      </main>
      <Footer />
    </>
  );
};

export default BookingManagementPage;
