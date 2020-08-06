export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const UPDATE_NAV = "UPDATE_NAV";
export const RESET_NAV = "RESET_NAV";

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  };
}

export function updateNav(data) {
  return {
    type: UPDATE_NAV,
    data: data,
  };
}

export function resetNav() {
  return {
    type: RESET_NAV,
  };
}
