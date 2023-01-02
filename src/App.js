import React, { useEffect } from 'react';
import BikeList from './features/bikeList/BikeList';
import './App.css';
import store from './app/store';
import getBikeList from './features/bikeList/bikeListAPI';

function App() {
  useEffect(() => {
    store.dispatch(getBikeList());
  });

  return (
    <div className="App">
      <BikeList />
    </div>
  );
}

export default App;
