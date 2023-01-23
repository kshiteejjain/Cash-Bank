import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/ProductList/ProductListSlice'

export const store = configureStore({
  reducer: {
    productListReducer
  },
});
