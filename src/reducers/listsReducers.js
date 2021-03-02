import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  GET_LIST_BY_ID_REQUEST,
  GET_LIST_BY_ID_SUCCESS,
  GET_LIST_BY_ID_FAIL,
  ADD_LIST_REQUEST,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAIL,
  DELETE_LIST_FAIL,
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
  STAR_LIST_FAIL,
  STAR_LIST_REQUEST,
  STAR_LIST_SUCCESS,
  UNSTAR_LIST_FAIL,
  UNSTAR_LIST_REQUEST,
  UNSTAR_LIST_SUCCESS,
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

export const addListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_LIST_REQUEST:
      const list = action.payload;
      return { ...state, allList: { ...state.list, list } };
    case ADD_LIST_SUCCESS:
      return { loading: false, tasks: action.payload };
    case ADD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteListReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LIST_REQUEST:
      return { loading: true };
    case DELETE_LIST_SUCCESS:
      return { loading: false, success: true };
    case DELETE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const starListReducer = (state = { star: {} }, action) => {
  switch (action.type) {
    case STAR_LIST_REQUEST:
      return { loading: true };
    case STAR_LIST_SUCCESS:
      return { loading: false, success: true };
    case STAR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const unStarListReducer = (state = { star: {} }, action) => {
  switch (action.type) {
    case STAR_LIST_REQUEST:
      return { loading: true };
    case STAR_LIST_SUCCESS:
      return { loading: false, success: true };
    case STAR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
