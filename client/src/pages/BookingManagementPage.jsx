import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartOverview from '../components/CartOverview';
import { removeFromCart, updateCartQuantity } from '../redux/slices/cartSlice';

const BookingManagementPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

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
