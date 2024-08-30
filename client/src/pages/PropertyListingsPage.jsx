import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersSidebar from '../components/FiltersSidebar';
import PropertyCard from '../components/PropertyCard';

const PropertyListingsPage = ({ properties }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: [0, 10000],
    bedrooms: '',
    amenities: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [filterType]: value };
      if (filterType === 'priceRange') {
        // No need to split or map, as value is already an array of numbers
        newFilters.priceRange = value;
      }
      return newFilters;
    });
  };

  useEffect(() => {
    const filtered = properties.filter((property) => {
      const price = property.price;
      return (
        (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.priceRange.length === 2 && (price >= filters.priceRange[0] && price <= filters.priceRange[1])) &&
        (filters.bedrooms === '' || property.bedrooms >= parseInt(filters.bedrooms, 10)) &&
        (filters.amenities === '' || property.amenities.toLowerCase().includes(filters.amenities.toLowerCase()))
      );
    });
    setFilteredProperties(filtered);
  }, [filters, properties]);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 flex flex-col lg:flex-row">
        <FiltersSidebar onFilterChange={handleFilterChange} />
        <section className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">All Properties</h2>
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

export default PropertyListingsPage;
