import React from "react";

export default function TextArea(props) {
  let { name, value, label, rows, onChange, isEditing } = props;

  return (
    <div className="input-field">
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={label}
        rows={rows}
        onChange={onChange}
        readOnly={!isEditing}
        className={!isEditing ? "readonly" : null}
      />
    </div>
  );
}
