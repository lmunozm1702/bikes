import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Continent from '../features/continent/Continent';
import store from '../app/store';

it('Testing BikeList page - Continents', () => {
  render(
    <Provider store={store}>
      <Continent url="/" />
    </Provider>,
  );
  const continentRendered = document.querySelector('#country-container-div');
  expect(continentRendered).toBeTruthy();
});
