const GET_BIKES = 'bikesList/getBikes';
const GET_BIKES_FULFILLED = 'bikesList/getBikes/fulfilled';

function getBikes(payload) {
  console.log('payload', payload);
  return {
    type: GET_BIKES,
    payload,
  };
}

export default function reducer(state = [], action = {}) {
  console.log(action.payload);
  switch (action.type) {
    case GET_BIKES_FULFILLED:
      return { worldwideBikeList: [action.payload.networks] };
    default:
      return state;
  }
}

export { GET_BIKES, getBikes };
