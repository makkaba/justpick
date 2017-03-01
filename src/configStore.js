import { createStore, combineReducers } from 'redux';


export default function configStore() {
  const reducers = require('./modules');
  const reducer = combineReducers(reducers);
  let store = createStore(reducer);
  return store;
}