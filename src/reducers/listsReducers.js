import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  GET_LIST_BY_ID_REQUEST,
  GET_LIST_BY_ID_SUCCESS,
  GET_LIST_BY_ID_FAIL,
} from "../constants/listConstants";

export const listReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return { loading: true, list: [] };
    case GET_LIST_SUCCESS:
      return { loading: false, list: action.payload };
    case GET_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listByIdReducer = (state = { listOne: {} }, action) => {
  switch (action.type) {
    case GET_LIST_BY_ID_REQUEST:
      return { loading: true, ...state };
    case GET_LIST_BY_ID_SUCCESS:
      return { loading: false, listOne: action.payload };
    case GET_LIST_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
