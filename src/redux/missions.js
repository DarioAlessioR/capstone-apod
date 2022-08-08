import { createSlice } from '@reduxjs/toolkit';
import getMissions from './apiMissions';

const initialState = {
  missions: [],
  status: null,
};

const reducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            joined: !mission.joined,
          };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
  },

  extraReducers: {
    [getMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      status: 'success',
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      loading: 'something went wrong',
    }),
  },
});

export const { setStatus } = reducer.actions;
export default reducer;
