import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rocketReducer from './rocketAction';

const rootReducer = combineReducers({ missions: missionReducer, rockets: rocketReducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
