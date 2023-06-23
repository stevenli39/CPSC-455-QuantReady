import { createStore, combineReducers } from 'redux';
import scratchpadReducer from './reducers/scratchpadReducer';

const rootReducer = combineReducers({
  scratchpad: scratchpadReducer,
  // ... other reducers if any
});

const store = createStore(rootReducer);

export default store;
