import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';

const HomePage = ({ properties }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section className="hero bg-blue-200 text-center py-12 px-10 lg:px-0">
          <h2 className="text-3xl font-bold">Find Your Perfect Rental Property</h2>
          <input
            type="text"
            className="w-full max-w-md mt-4 p-2 border rounded"
            placeholder="Search for properties..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
