// import bookList from "../../fakeData/books.json";

const initialState = {
  discoverList: [],
  readingList: [],
  finishedList: [],
};
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_BOOKS": {
      const newState = {
        ...state,
        discoverList: [...action.payload],
      };
      return newState;
    }
    case "LOAD_READING_LIST": {
      const newState = {
        ...state,
        readingList: [...action.payload],
      };
      return newState;
    }
    case "ADD_TO_READING_LIST": {
      const isAdded = state.readingList.find(
        (book) => book.id === action.payload.id
      );

      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return isAdded ? state : newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload.id
        ),
      };
      return newState;
    }
    case "MARK_AS_FINISHED": {
      const isFinished = state.finishedList.find(
        (book) => book.id === action.payload.id
      );
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload.id
        ),
        finishedList: isFinished
          ? [...state.finishedList]
          : [...state.finishedList, action.payload],
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
