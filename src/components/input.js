import React from "react";

export default function Input(props) {
  let { name, value, label, type, onInput, isEditing } = props;
  return (
    <div class="input-field">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onInput={onInput}
        readOnly={!isEditing}
        class={!isEditing ? "readonly" : null}
      />
    </div>
  );
}
