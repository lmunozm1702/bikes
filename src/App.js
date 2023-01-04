import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BikeList from './features/bikeList/BikeList';
import './App.css';
import store from './app/store';
import getBikeList from './features/bikeList/bikeListAPI';

export default function App() {
  useEffect(() => {
    store.dispatch(getBikeList());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BikeList />} />
      </Routes>
    </BrowserRouter>
  );
}
