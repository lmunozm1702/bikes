import getBikeList from '../Redux/bikeListSlice';

it('Expects getBikes get a function', () => {
  let bikesList = {};
  bikesList = getBikeList();
  expect(typeof bikesList).toBe('function');
});
