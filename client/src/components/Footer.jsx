import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} RentEasy. All rights reserved.</p>
        <p>
          <a href="/terms" className="hover:underline">Terms of Service</a> | 
          <a href="/privacy" className="hover:underline"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
