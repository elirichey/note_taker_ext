import React from "react";

export default function TextArea(props) {
  let { name, value, label, rows, onInput, isEditing } = props;

  return (
    <div class="input-field">
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={label}
        rows={rows}
        onInput={onInput}
        readOnly={!isEditing}
        class={!isEditing ? "readonly" : null}
      />
    </div>
  );
}
