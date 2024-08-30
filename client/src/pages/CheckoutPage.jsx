import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingDetailsForm from '../components/BookingDetailsForm';

const CheckoutPage = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cost
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
        {/* Order Summary */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">Order Summary</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-12 object-cover mr-4" />
                  <span className="text-lg font-semibold">{item.title}</span>
                </div>
                <div className="text-lg font-medium">
                  ${item.price} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold border-t pt-4">
            Total Cost: ${totalCost}
          </div>
        </div>

        {/* Booking Details Form */}
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">Booking Details</h2>
          <BookingDetailsForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
