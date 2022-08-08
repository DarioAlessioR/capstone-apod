import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const createTable = (data) => {
  const missions = [];
  const keys = Object.keys(data);

  keys.forEach((mission) => {
    missions.push(
      {
        id: data[mission].mission_id,
        name: data[mission].mission_name,
        description: data[mission].description,
        joined: false,
      },
    );
  });
  return missions;
};

const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createTable(data);
  },
);

export default getMissions;
