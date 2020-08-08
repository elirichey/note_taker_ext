import React from "react";
import AuthedContainer from "../layouts/AuthedContainer";
import NotAuthed from "../layouts/NotAuthed";

export default function Router(props) {
  let { profile } = props;
  return profile === null ? <AuthedContainer /> : <NotAuthed />;
}
