import { configureStore } from '@reduxjs/toolkit';
import bikeList from '../features/bikeList/bikeListReducer';

const store = configureStore({
  reducer: {
    bikeList,
  },
});

export default store;
