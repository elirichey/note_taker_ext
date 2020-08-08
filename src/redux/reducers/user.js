import {
  FETCH_USER_UPDATE,
  LOAD_USER_PROFILE,
  FAIL_USER_UPDATE,
  LOAD_USER_NOTES,
  ADD_USER_NOTE,
  REMOVE_USER_NOTE,
  RESET_AUTH,
} from "../actions/user";

const initialState = {
  isFetching: false,
  profile: null,
  listNotes: [],
  error: null,
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
      // let add_notes = [];
      return {
        ...state,
        isFetching: false,
        // listNotes: add_notes,
        error: null,
      };
    case REMOVE_USER_NOTE:
      // let remove_notes = [];
      return {
        ...state,
        isFetching: false,
        // listNotes: remove_notes,
        error: null,
      };
    case RESET_AUTH:
      return initialState;
    default:
      return state;
  }
}
