import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from './slices/propertiesSlice.js';
import cartReducer from './slices/cartSlice.js';

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    cart: cartReducer
  }
});

export default store;
