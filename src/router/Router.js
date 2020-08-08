import React from "react";
import Authed from "../layouts/Authed";
import NotAuthed from "../layouts/NotAuthed";

export default function Router(props) {
  let { profile } = props;
  return profile !== null ? <Authed /> : <NotAuthed />;
}
