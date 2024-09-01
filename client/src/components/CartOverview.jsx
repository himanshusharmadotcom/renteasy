import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateCartQuantity } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartOverview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const bookingCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart Overview</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border-b mb-4 pb-4 flex items-center">
              <img src={item.image} alt={item.title} className="w-24 h-16 object-cover mr-4" />
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                    className="bg-blue-600 text-white px-2 py-1 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">Total Cost: ${totalCost}</p>
            <p className="text-lg font-bold">Booking Count: {bookingCount}</p>
            <button
              onClick={handleClearCart}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded ml-2"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartOverview;
