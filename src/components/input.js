import React from "react";

export default function Input(props) {
  let { name, value, label, type, onChange, isEditing } = props;
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        readOnly={!isEditing}
        className={!isEditing ? "readonly" : null}
      />
    </div>
  );
}
