import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from '@redux-devtools/extension';

import moviesReducer from './reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
