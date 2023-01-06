import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './Country';
import Continent from './Continent';
import './App.css';
import store from '../Redux/configureStore';
import getBikeList from '../Redux/bikeListSlice';

export default function App() {
  useEffect(() => {
    store.dispatch(getBikeList());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Continent />} />
        <Route path="/:country_id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}
