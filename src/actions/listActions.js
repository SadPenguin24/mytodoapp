import axios from "axios";
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  GET_LIST_BY_ID_REQUEST,
  GET_LIST_BY_ID_SUCCESS,
  GET_LIST_BY_ID_FAIL,
} from "../constants/listConstants";

export const lists = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_REQUEST });

    const { data } = await axios.get("/lists");
    dispatch({
      type: GET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};

export const listById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_BY_ID_REQUEST });

    const { data } = await axios.get(`/lists/${id}`);
    dispatch({
      type: GET_LIST_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};
