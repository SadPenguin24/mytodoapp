import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  listReducer,
  listByIdReducer,
  addListReducer,
  deleteListReducer,
  starListReducer,
  unStarListReducer,
} from "./reducers/listsReducers";
import { getTaskReducer, addTaskReducer } from "./reducers/taskReducers";

const reducer = combineReducers({
  allList: listReducer,
  listDetails: listByIdReducer,
  listTask: getTaskReducer,
  addToTask: addTaskReducer,
  addToList: addListReducer,
  deleteFromList: deleteListReducer,
  starAList: starListReducer,
  unstarAList: unStarListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
