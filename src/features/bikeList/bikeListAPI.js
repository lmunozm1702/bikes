import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBikes, GET_BIKES } from './bikeListReducer';

const BIKES_URL = 'http://api.citybik.es/v2/networks';

const getBikeList = createAsyncThunk(GET_BIKES, async (_, thunkAPI) => {
  const response = await fetch(BIKES_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  await thunkAPI.dispatch(getBikes(responseJSON));
  return responseJSON;
});

export default getBikeList;
