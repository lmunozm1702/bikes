import {
  GET_BIKES, getBikes, FILTER_BY_COUNTRY, filterByCountry, backToContinent, BACK_TO_CONTINENT,
} from '../Component/bikeListReducer';

it('Expect GET_BYKES type returned', () => {
  const result = getBikes(1);
  expect(result.type).toBe(GET_BIKES);
});

it('Expect FILTER_BY_COUNTRY type returned', () => {
  const result = filterByCountry(1);
  expect(result.type).toBe(FILTER_BY_COUNTRY);
});

it('Expect BACK_TO_CONTINENT type returned', () => {
  const result = backToContinent(1);
  expect(result.type).toBe(BACK_TO_CONTINENT);
});
