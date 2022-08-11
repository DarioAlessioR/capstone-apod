import { configureStore } from '@reduxjs/toolkit';
import pics from './pics';

const store = configureStore({
  reducer: {
    pics: pics.reducer,
  },
});

export default store;
