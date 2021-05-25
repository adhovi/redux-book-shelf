export const ADD_TO_READING_LIST = "ADD_TO_READING_LIST";
export const REMOVE_FROM_READING_LIST = "REMOVE_FROM_READING_LIST";
export const MARK_AS_FINISHED = "MARK_AS_FINISHED";

export const addToReadingList = (payload) => {
  return {
    type: ADD_TO_READING_LIST,
    payload,
  };
};

export const removeFromReadingList = (payload) => {
  return {
    type: REMOVE_FROM_READING_LIST,
    payload,
  };
};

export const markedAsFinished = (payload) => {
  return {
    type: MARK_AS_FINISHED,
    payload,
  };
};
