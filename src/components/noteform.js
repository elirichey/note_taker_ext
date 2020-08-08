import React, { Fragment } from "react";
import Input from "./input";
import TextArea from "./textarea";
import ActionBtn from "./actionbtn";

export default function NoteForm(props) {
  let { title, url, excerpt, notes, isEditing } = props.state;
  let { updateField, trySubmit } = props;

  return (
    <Fragment>
      <Input
        name="title"
        value={title}
        label="Title"
        type="text"
        isEditing={isEditing}
        onChange={updateField}
      />

      <Input
        name="url"
        value={url}
        label="URL"
        type="text"
        isEditing={isEditing}
        onChange={updateField}
      />

      <TextArea
        name="excerpt"
        value={excerpt}
        label="Excerpt Text"
        rows="10"
        isEditing={isEditing}
        onChange={updateField}
      />

      <TextArea
        name="notes"
        value={notes}
        label="Notes"
        rows="10"
        isEditing={isEditing}
        onChange={updateField}
      />

      {isEditing ? (
        <div className="d-block mt-30 mb-15">
          <ActionBtn action={trySubmit} label="Save" />
        </div>
      ) : null}
    </Fragment>
  );
}
