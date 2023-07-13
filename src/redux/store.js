import { configureStore } from '@reduxjs/toolkit';
import scratchpadReducer from './reducers/scratchpadReducer';
import questionsReducer from './questions/reducers';

const store = configureStore({
  reducer: {
    scratchpad: scratchpadReducer,
    questions: questionsReducer
  },
  devTools: true
});

export default store;
