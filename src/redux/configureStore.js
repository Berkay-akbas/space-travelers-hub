import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketAction';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
