import {
  ADD_TASK_FAIL,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  GET_TASK_FAIL,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "../constants/taskConstants";

export const getTaskReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return { loading: true, tasks: [] };
    case GET_TASK_SUCCESS:
      return { loading: false, tasks: action.payload };
    case GET_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      const item = action.payload;
      return { ...state, listTask: { ...state.tasks, item } };
    case ADD_TASK_SUCCESS:
      return { loading: false, tasks: action.payload };
    case ADD_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
