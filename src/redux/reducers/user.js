import {
  FETCH_USER_UPDATE,
  LOAD_USER_PROFILE,
  FAIL_USER_UPDATE,
  LOAD_USER_NOTES,
  ADD_USER_NOTE,
  EDIT_USER_NOTE,
  REMOVE_USER_NOTE,
  VIEW_USER_NOTE,
  CLEAR_VIEW_USER_NOTE,
  RESET_AUTH,
} from "../actions/user";

const initialState = {
  isFetching: false,
  profile: null,
  listNotes: [],
  viewNote: null,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    // Profile
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

    // Notes
    case LOAD_USER_NOTES:
      return {
        ...state,
        isFetching: false,
        listNotes: action.data,
        error: null,
      };
    case ADD_USER_NOTE:
      let add_notes = [...state.listNotes];
      add_notes.push(action.data);
      return {
        ...state,
        isFetching: false,
        listNotes: add_notes,
        error: null,
      };
    case EDIT_USER_NOTE:
      let edit_notes = [];
      let check_notes = [...state.listNotes];

      check_notes.map((item) => {
        // These should really be id's
        if (item.title !== action.data.title) {
          edit_notes.push(item);
        }
      });

      edit_notes.push(action.data);

      return {
        ...state,
        isFetching: false,
        listNotes: edit_notes,
        viewNote: action.data,
        error: null,
      };
    case REMOVE_USER_NOTE:
      let new_notes = [];
      let remove_notes = [...state.listNotes];

      remove_notes.map((item) => {
        if (item !== action.data) {
          new_notes.push(item);
        }
      });

      return {
        ...state,
        isFetching: false,
        listNotes: new_notes,
        error: null,
      };
    case VIEW_USER_NOTE:
      return {
        ...state,
        isFetching: false,
        viewNote: action.data,
        error: null,
      };
    case CLEAR_VIEW_USER_NOTE:
      return {
        ...state,
        isFetching: false,
        viewNote: null,
        error: null,
      };
    case RESET_AUTH:
      return initialState;
    default:
      return state;
  }
}
