import { createStore, combineReducers } from "redux";
import { searchPageReducer } from "./search-page/reducer";

const rootReducer = combineReducers({
    searchPage: searchPageReducer
});

export const store = createStore(rootReducer);

console.log(store.getState());