export const FETCH_CREATE_USER = "FETCH_CREATE_USER";
export const FETCH_USER_UPDATE = "FETCH_USER_UPDATE";
export const LOAD_USER_PROFILE = "LOAD_USER_PROFILE";
export const FAIL_USER_UPDATE = "FAIL_USER_UPDATE";

export const LOAD_USER_NOTES = "LOAD_USER_NOTES";
export const ADD_USER_NOTE = "ADD_USER_NOTE";
export const REMOVE_USER_NOTE = "REMOVE_USER_NOTE";
export const VIEW_USER_NOTE = "VIEW_USER_NOTE";
export const EDIT_USER_NOTE = "EDIT_USER_NOTE";
export const CLEAR_VIEW_USER_NOTE = "  CLEAR_VIEW_USER_NOTE";

export const RESET_AUTH = "RESET_AUTH";

// ******************** User ******************** //

export function fetchUserUpdate() {
  return {
    type: FETCH_USER_UPDATE,
  };
}
export function loadUserUpdate(data) {
  return {
    type: LOAD_USER_PROFILE,
    data: data,
  };
}
export function failUserUpdate(data) {
  return {
    type: FAIL_USER_UPDATE,
    data: data,
  };
}

// ******************** Notes ******************** //

export function loadUserNotes() {
  return {
    type: LOAD_USER_NOTES,
  };
}
export function addUserNote(data) {
  return {
    type: ADD_USER_NOTE,
    data: data,
  };
}
export function removeUserNote(data) {
  return {
    type: REMOVE_USER_NOTE,
    data: data,
  };
}

export function viewUserNote(data) {
  return {
    type: VIEW_USER_NOTE,
    data: data,
  };
}
export function editUserNote(data) {
  return {
    type: EDIT_USER_NOTE,
    data: data,
  };
}
export function clearViewUserNote() {
  return {
    type: CLEAR_VIEW_USER_NOTE,
  };
}

// ******************** Reset / Logout ******************** //

export function resetAuth() {
  return {
    type: RESET_AUTH,
  };
}
