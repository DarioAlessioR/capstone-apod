import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const rocketList = (objetc) => {
  let rocketData = {};

  objetc.forEach((item) => {
    rocketData = {
      ...rocketData,
      [item.id]: {
        name: item.rocket_name,
        description: item.description,
        image: item.flickr_images[0],
        reserved: false,
        id: item.id,
      },
    };
  });
  return rocketData;
};

const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return rocketList(data);
  },
);

export default getRockets;
