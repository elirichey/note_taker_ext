import {
  FETCH_USER_UPDATE,
  LOAD_USER_PROFILE,
  FAIL_USER_UPDATE,
  LOAD_USER_NOTES,
  ADD_USER_NOTE,
  REMOVE_USER_NOTE,
  RESET_AUTH,
} from "../actions/auth";

const initialState = {
  isFetching: false,
  profile: null,
  error: null,
  listNotes: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_UPDATE:
      return {
        ...state,
        isFetching: true,
      };
    case LOAD_USER_PROFILE:
      return {
        ...state,
        isFetching: false,
        profile: action.data,
        error: null,
      };
    case FAIL_USER_UPDATE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
      };

    case LOAD_USER_NOTES:
      return {
        ...state,
        isFetching: false,
        listNotes: action.data,
        error: null,
      };
    case ADD_USER_NOTE:
      return {
        ...state,
        isFetching: false,
        // listNotes: action.data,
        error: null,
      };
    case REMOVE_USER_NOTE:
      return {
        ...state,
        isFetching: false,
        // listNotes: action.data,
        error: null,
      };
    case RESET_AUTH:
      return initialState;
    default:
      return state;
  }
}
