import { todoReducer } from "./views/todo/redux/index";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ todo: todoReducer });

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
