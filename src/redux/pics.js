import { createSlice } from '@reduxjs/toolkit';
import getPics from './api';

const initialState = {
  pics: [],
};

const pics = createSlice({
  name: 'pics',
  initialState,
  reducers: {
    updatePic: (state, action) => ({
      ...state,
      pics: {
        ...state.pics,
        [action.payload]: {
          ...state.pics[action.payload],
        },
      },
    }),
  },

  extraReducers: {
    [getPics.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),

    [getPics.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      pics: action.payload,
    }),

    [getPics.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { updatePic } = pics.actions;

export default pics;
