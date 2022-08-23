import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'GET_ROCKETS';

const BaseUrl = 'https://api.spacexdata.com/v3/rockets';

const rockets = [];

const rocketReducer = (state = rockets, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
    // case GET_ROCKETS:
      return action.payload;

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
      rocket_name: key.rocket_name,
      description: key.description,
      image: key.flickr_images[1],
    });

    return arr;
  });

  // const newArray = arr.slice(0,10);
  return arr;
});

export default rocketReducer;
