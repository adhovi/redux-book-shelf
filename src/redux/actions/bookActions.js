import axios from "axios";

export const LOAD_BOOKS = "LOAD_BOOKS";
export const LOAD_READING_LIST = "LOAD_READING_LIST";
export const ADD_TO_READING_LIST = "ADD_TO_READING_LIST";
export const REMOVE_FROM_READING_LIST = "REMOVE_FROM_READING_LIST";
export const MARK_AS_FINISHED = "MARK_AS_FINISHED";

export const loadBooks = (payload) => {
  return (dispatch, getState) => {
    axios.get("https://redux-book-shelf.herokuapp.com/books").then((data) => {
      dispatch({
        type: LOAD_BOOKS,
        payload: data.data.data,
      });
    });
  };
};

export const loadReadingList = (payload) => {
  return (dispatch, getState) => {
    axios
      .get("https://redux-book-shelf.herokuapp.com/reading-list")
      .then((data) => {
        dispatch({
          type: LOAD_READING_LIST,
          payload: data.data.data,
        });
      });
  };
};

export const addToReadingList = (payload) => {
  return async (dispatch, getState) => {
    await axios.post(
      "https://redux-book-shelf.herokuapp.com/add-to-reading-list",
      payload
    );

    dispatch({
      type: ADD_TO_READING_LIST,
      payload,
    });
  };
};

export const removeFromReadingList = (payload) => {
  return async (dispatch, getState) => {
    await axios.delete(
      `https://redux-book-shelf.herokuapp.com/remove-from-reading-list/${payload._id}`,
      payload
    );
    dispatch({
      type: REMOVE_FROM_READING_LIST,
      payload,
    });
  };
};

export const markedAsFinished = (payload) => {
  return {
    type: MARK_AS_FINISHED,
    payload,
  };
};
