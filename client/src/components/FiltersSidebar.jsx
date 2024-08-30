import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

const FiltersSidebar = ({ onFilterChange }) => {
  const properties = useSelector(state => state.properties);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: [0, 1000],
    bedrooms: '',
    amenities: ''
  });

  const allLocations = [...new Set(properties.map(p => p.location))];
  const allAmenities = [...new Set(properties.flatMap(p => p.amenities.split(', ')))];

  useEffect(() => {
    onFilterChange('priceRange', filters.priceRange);
  }, [filters.priceRange, onFilterChange]);

  const handleInputChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
    onFilterChange(name, value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: newValue
    }));
    onFilterChange('priceRange', newValue);
  };

  return (
    <aside className="lg:w-64 w-full p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <form>
        {/* Location Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <TextField
            select
            className="w-full"
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select a location</option>
            {allLocations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </TextField>
        </div>

        {/* Price Range Slider */}
        <div className="mb-4">
          <label className="block text-gray-700">Price Range</label>
          <div className="flex justify-between">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
          <Slider
            value={filters.priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={100}
          />
        </div>

        {/* Number of Bedrooms */}
        <div className="mb-4">
          <label className="block text-gray-700">Number of Bedrooms</label>
          <TextField
            type="number"
            className="w-full"
            value={filters.bedrooms}
            onChange={(e) => handleInputChange('bedrooms', e.target.value)}
          />
        </div>

        {/* Amenities Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Amenities</label>
          <TextField
            select
            className="w-full"
            value={filters.amenities}
            onChange={(e) => handleInputChange('amenities', e.target.value)}
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select amenities</option>
            {allAmenities.map((amenity, index) => (
              <option key={index} value={amenity}>{amenity}</option>
            ))}
          </TextField>
        </div>
      </form>
    </aside>
  );
};

export default FiltersSidebar;
