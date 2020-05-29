import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import user from './user';
import task from './task';
import gameState from './gameState';
import reward from './reward';

const reducer = combineReducers({
  user, 
  task, 
  gameState, 
  reward
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './task';
export * from './gameState';
export * from './reward';