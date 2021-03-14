import axios from "axios";
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

export const addList = (listName) => async (dispatch) => {
  try {
    dispatch({ type: ADD_LIST_REQUEST });

    const { data } = await axios.post("/lists/add", { listName });
    dispatch({
      type: ADD_LIST_SUCCESS,
      payload: {
        listName: data.listName,
      },
    });
    dispatch(lists());
  } catch (error) {
    dispatch({
      type: ADD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};

export const deleteList = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LIST_REQUEST });

    await axios.delete(`/lists/${id}/delete`);
    dispatch({ type: DELETE_LIST_SUCCESS });
    dispatch(lists());
  } catch (error) {
    dispatch({
      type: DELETE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};

export const starList = (id) => async (dispatch) => {
  try {
    dispatch({ type: STAR_LIST_REQUEST });

    const { data } = await axios.put(`/lists/${id}/star`);
    dispatch({ type: STAR_LIST_SUCCESS, payload: data });
    dispatch(lists());
  } catch (error) {
    dispatch({
      type: STAR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};

export const unStarList = (id) => async (dispatch) => {
  try {
    dispatch({ type: UNSTAR_LIST_REQUEST });

    const { data } = await axios.put(`/lists/${id}/unstar`);
    dispatch({ type: UNSTAR_LIST_SUCCESS, payload: data });
    dispatch(lists());
  } catch (error) {
    dispatch({
      type: UNSTAR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.respons.data.message
          : error.message,
    });
  }
};
