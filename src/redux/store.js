import { createStore, combineReducers } from "redux";
import gallery from './gallery';

let reducers = combineReducers({
  gallery: gallery
});

let store = createStore(reducers)

export default store;



