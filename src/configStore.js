import { createStore, combineReducers } from 'redux';


export default function configStore() {
  //모든 리듀서를 불러와서 병합해준다
  const reducers = require('./modules');
  const reducer = combineReducers(reducers);
  let store = createStore(reducer);
  return store;
}