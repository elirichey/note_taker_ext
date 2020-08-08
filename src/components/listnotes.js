import React from "react";
import ListItem from "./listitem";

export default function ListNotes(props) {
  return (
    <div className="list-container">
      <ul id="list-notes">
        <ListItem />
      </ul>
    </div>
  );
}
