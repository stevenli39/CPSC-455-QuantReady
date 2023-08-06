import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import scratchpadReducer from './reducers/scratchpadReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    scratchpad: scratchpadReducer,
    auth: authReducer
  },
  middleware: [thunk],
  devTools: true
});

export default store;
