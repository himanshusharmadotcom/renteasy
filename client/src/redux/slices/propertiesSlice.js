import { createSlice } from '@reduxjs/toolkit';

// property images

import property1 from '../../assets/images/property-1.jpg';
import property2 from '../../assets/images/property-2.jpg';
import property3 from '../../assets/images/property-3.jpg';
import property4 from '../../assets/images/property-4.jpg';
import property5 from '../../assets/images/property-5.jpg';
import property6 from '../../assets/images/property-6.jpg';
import property7 from '../../assets/images/property-7.jpg';
import property8 from '../../assets/images/property-8.jpg';
import property9 from '../../assets/images/property-9.jpg';
import property10 from '../../assets/images/property-10.jpg';

const initialState = [
  {
    id: 1,
    title: 'Cozy Cottage',
    description: 'A cozy cottage in the countryside with a beautiful garden.',
    price: 120,
    location: 'Countryside',
    bedrooms: 2,
    amenities: 'Garden',
    image: property1
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'A modern apartment in the city center with stunning skyline views.',
    price: 250,
    location: 'City Center',
    bedrooms: 1,
    amenities: 'Skyline Views',
    image: property2
  },
  {
    id: 3,
    title: 'Luxury Villa',
    description: 'A luxurious villa with private pool and beachfront access.',
    price: 500,
    location: 'Beachfront',
    bedrooms: 4,
    amenities: 'Private Pool, Beach Access',
    image: property3
  },
  {
    id: 4,
    title: 'Mountain Cabin',
    description: 'A rustic mountain cabin with a cozy fireplace and hiking trails.',
    price: 150,
    location: 'Mountain',
    bedrooms: 3,
    amenities: 'Fireplace, Hiking Trails',
    image: property4
  },
  {
    id: 5,
    title: 'Urban Loft',
    description: 'An open-plan urban loft in a trendy neighborhood with high ceilings.',
    price: 300,
    location: 'Urban',
    bedrooms: 1,
    amenities: 'High Ceilings',
    image: property5
  },
  {
    id: 6,
    title: 'Beachfront Condo',
    description: 'A chic beachfront condo with panoramic ocean views and direct beach access.',
    price: 350,
    location: 'Beachfront',
    bedrooms: 2,
    amenities: 'Panoramic Ocean Views, Beach Access',
    image: property6
  },
  {
    id: 7,
    title: 'Suburban Family Home',
    description: 'A spacious family home in a quiet suburban neighborhood with a large backyard.',
    price: 200,
    location: 'Suburban',
    bedrooms: 4,
    amenities: 'Large Backyard',
    image: property7
  },
  {
    id: 8,
    title: 'Charming Bungalow',
    description: 'A charming bungalow with a wrap-around porch and beautiful garden.',
    price: 180,
    location: 'Suburban',
    bedrooms: 2,
    amenities: 'Wrap-Around Porch, Garden',
    image: property8
  },
  {
    id: 9,
    title: 'Penthouse Suite',
    description: 'A luxurious penthouse suite with private terrace and stunning city views.',
    price: 700,
    location: 'City Center',
    bedrooms: 3,
    amenities: 'Private Terrace, City Views',
    image: property9
  },
  {
    id: 10,
    title: 'Historic Mansion',
    description: 'A beautifully restored historic mansion with classic architecture and elegant interiors.',
    price: 600,
    location: 'Historic District',
    bedrooms: 5,
    amenities: 'Classic Architecture, Elegant Interiors',
    image: property10
  }
];



const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    addProperty: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addProperty } = propertiesSlice.actions;
export default propertiesSlice.reducer;
