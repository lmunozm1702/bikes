import { configureStore } from '@reduxjs/toolkit';
import bikeList from '../features/bikeList/BikeListReducer';

export const store = configureStore({
  reducer: {
    bikeList,
  },
});
