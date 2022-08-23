import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({ missions: missionReducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
