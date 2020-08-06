import { h, Component } from "preact";

export default function Input({ name, value, label, type, onInput }) {
  return (
    <div class="input-field">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onInput={onInput}
      />
    </div>
  );
}
