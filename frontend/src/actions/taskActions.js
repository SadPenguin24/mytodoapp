import axios from "axios";
import {
  ADD_TASK_FAIL,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  GET_TASK_FAIL,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "../constants/taskConstants";

export const getTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_TASK_REQUEST });

    const { data } = await axios.get(`/lists/${id}/tasks`);
    dispatch({
      type: GET_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};

export const addTask = (id, itemName) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TASK_REQUEST });

    const { data } = await axios.post(`/lists/${id}/tasks/add`, { itemName });
    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: {
        itemName: data.itemName,
      },
    });
  } catch (error) {
    dispatch({
      type: ADD_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};
