import { configureStore } from '@reduxjs/toolkit';
import bikeList from '../Component/bikeListReducer';

const store = configureStore({
  reducer: {
    bikeList,
  },
});

export default store;
