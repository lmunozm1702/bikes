const GET_BIKES = 'bikesList/getBikes';
const GET_BIKES_FULFILLED = 'bikesList/getBikes/fulfilled';
const FILTER_BY_COUNTRY = 'bikesList/filterByCountry';
const BACK_TO_CONTINENT = 'bikesList/backToContinent';
const _ = require('lodash');

const EUROPE = ['BE', 'BG', 'CZ', 'DK', 'DE', 'EE', 'IE', 'EL', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE'];
// const COUNTRIES = ['IT'];

const initialState = {
  isDetailSelected: false,
  citiesBikeList: {},
};

function getBikes(payload) {
  return {
    type: GET_BIKES,
    payload,
  };
}

function filterByCountry(payload) {
  return {
    type: FILTER_BY_COUNTRY,
    payload,
  };
}

function backToContinent() {
  return {
    type: BACK_TO_CONTINENT,
  };
}

export default function reducer(state = initialState, action = {}) {
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
        ...state,
        worldwideBikeList: [...action.payload.networks],
        countryBikeList: { ...bikesGrouped },
        totalProviders: newArray.length,
      };
    case FILTER_BY_COUNTRY:
      newArray = { ...state.countryBikeList[action.payload] };
      bikesGrouped = _.groupBy(newArray, (bike) => bike.location.city);
      return {
        ...state,
        citiesBikeList: { ...bikesGrouped },
        isDetailSelected: true,
      };
    case BACK_TO_CONTINENT:
      return {
        ...state,
        isDetailSelected: false,
      };
    default:
      return state;
  }
}

export {
  GET_BIKES, getBikes, FILTER_BY_COUNTRY, filterByCountry, backToContinent,
};
