import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE = 'RESERVE';
const CANCEL = 'CANCEL';
const BaseUrl = 'https://api.spacexdata.com/v3/rockets';

const rockets = [];

const rocketReducer = (state = rockets, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;

    case RESERVE: {
      return state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    }

    case CANCEL: {
      return state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    }
    default:
      return state;
  }
};

export const fetchData = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await fetch(BaseUrl);
  const data = await response.json();
  const arr = [];

  data.map((key) => {
    arr.push({
      id: key.id,
      rocketName: key.rocket_name,
      description: key.description,
      image: key.flickr_images[1],
      reserved: false,
    });
    return arr;
  });

  return arr;
});

export const reserveRocket = (id) => ({
  type: RESERVE,
  id,
});

export const cancelReserve = (id) => ({
  type: CANCEL,
  id,
});
export default rocketReducer;
