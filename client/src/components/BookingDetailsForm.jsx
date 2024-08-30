import React, { useState } from 'react';

const BookingDetailsForm = ({ onSubmit }) => {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ contactInfo, paymentInfo });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Booking Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" value={contactInfo.name} onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })} className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input type="tel" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Card Number</label>
        <input type="text" value={paymentInfo.cardNumber} onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Expiry Date</label>
        <input type="text" value={paymentInfo.expiryDate} onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })} className="w-full border p-2 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">CVV</label>
        <input type="text" value={paymentInfo.cvv} onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })} className="w-full border p-2 rounded" required />
      </div>
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Confirm Booking</button>
    </form>
  );
};

export default BookingDetailsForm;
