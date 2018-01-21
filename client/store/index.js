import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import location from './location';
import sites from './sites';
import testing from './testing';

const reducer = combineReducers({location, sites, testing});
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware
  // createLogger({collapsed: true})
));
const store = createStore(reducer, middleware);

export default store;
export * from './location';
export * from './sites';
export * from './testing';
