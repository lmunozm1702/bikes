import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import BikeList from '../features/bikeList/BikeList';
import store from '../app/store';

it('Testing BikeList page - Continents', () => {
  render(
    <Provider store={store}>
      <BikeList url="/" />
    </Provider>,
  );
  const continentRendered = document.querySelector('#continent-div');
  expect(continentRendered).toBeTruthy();
});

it('Testing BikeList page - Countries', () => {
  render(
    <Provider store={store}>
      <BikeList url="/" />
    </Provider>,
  );
  const countriesRendered = document.querySelector('#country-div');
  expect(countriesRendered).toBeTruthy();
});
