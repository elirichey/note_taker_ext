import React, { Fragment } from "react";

export default function ShowItemControls(props) {
  let { isEditing } = props;
  return (
    <div className="show-item-controls">
      {!isEditing ? (
        <Fragment>
          <button onClick={() => props.toggleEdit()}>Edit</button>
          <button onClick={() => props.deleteItem()} className="delete">
            Delete
          </button>
        </Fragment>
      ) : (
        <button onClick={() => props.toggleEdit()}>Exit Editing</button>
      )}
    </div>
  );
}
