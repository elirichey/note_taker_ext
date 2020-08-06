import { TOGGLE_SIDEBAR, UPDATE_NAV, RESET_NAV } from "../actions/nav";

const initialState = {
  show_sidebar: false,
  navRoot: "Add",
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        show_sidebar: !state.show_sidebar,
      };
    case UPDATE_NAV:
      return {
        ...state,
        navRoot: action.data,
      };
    case RESET_NAV:
      return initialState;
    default:
      return state;
  }
}
