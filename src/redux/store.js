import { applyMiddleware, combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunk);

const combinedReducer = combineReducers({
  books: bookReducer,
});

export const store = createStore(
  combinedReducer,
  composeWithDevTools(middlewareEnhancer)
);
