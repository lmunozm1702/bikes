const GET_BIKES = 'bikesList/getBikes';
const GET_BIKES_FULFILLED = 'bikesList/getBikes/fulfilled';
const _ = require('lodash');

const EUROPE = ['BE', 'BG', 'CZ', 'DK', 'DE', 'EE', 'IE', 'EL', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE'];
// const COUNTRIES = ['IT'];

function getBikes(payload) {
  return {
    type: GET_BIKES,
    payload,
  };
}

export default function reducer(state = {}, action = {}) {
  let bikesGrouped = {};
  let newArray = [];

  switch (action.type) {
    case GET_BIKES_FULFILLED:
      if (action.payload.networks) {
        // eslint-disable-next-line max-len
        newArray = action.payload.networks.filter((elem) => EUROPE.some((f) => f === elem.location.country));
        bikesGrouped = _.groupBy(newArray, (bike) => bike.location.country);
      }

      return {
        worldwideBikeList: [...action.payload.networks],
        countryBikeList: { ...bikesGrouped },
        totalProviders: newArray.length,
      };
    default:
      return state;
  }
}

export { GET_BIKES, getBikes };
