import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rocket';

const rootReducer = combineReducers({ missions: missionReducer, rockets: rocketReducer });

export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  preloadedState,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
