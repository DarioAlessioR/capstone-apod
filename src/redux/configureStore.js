import { configureStore } from '@reduxjs/toolkit';
import missions from './missions';
import rockets from './rockets';

const store = configureStore({
  reducer: {
    missions: missions.reducer,
    rockets: rockets.reducer,
  },
});

export default store;
