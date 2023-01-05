import getBikeList from '../features/bikeList/bikeListAPI';

it('Expects getBikes get a function', () => {
  let bikesList = {};
  bikesList = getBikeList();
  expect(typeof bikesList).toBe('function');
});
