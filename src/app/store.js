import { configureStore } from '@reduxjs/toolkit';
import bikeList from '../features/bikeList/BikeListReducer';

const store = configureStore({
  reducer: {
    bikeList,
  },
});

export default store;
