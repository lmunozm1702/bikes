import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Country from '../features/country/Country';
import store from '../app/store';

it('Testing BikeList page - Continents', () => {
  render(
    <Provider store={store}>
      <Country url="/" />
    </Provider>,
  );
  const continentRendered = document.querySelector('#city-container-div');
  expect(continentRendered).toBeTruthy();
});