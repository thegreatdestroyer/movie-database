import { createStore, combineReducers, applyMiddleware } from "redux";
import { searchPageReducer } from "./search-page/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    searchPage: searchPageReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type TRootState = ReturnType<typeof rootReducer>;

console.log(store.getState());