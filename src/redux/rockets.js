import { createSlice } from '@reduxjs/toolkit';
import getRockets from './apiRockets';

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateRocket: (state, action) => ({
      ...state,
      rockets: {
        ...state.rockets,
        [action.payload]: {
          ...state.rockets[action.payload],
          reserved: !state.rockets[action.payload].reserved,
        },
      },
    }),
  },

  extraReducers: {
    [getRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),

    [getRockets.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      rockets: action.payload,
    }),

    [getRockets.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { updateRocket } = rockets.actions;

export default rockets;
