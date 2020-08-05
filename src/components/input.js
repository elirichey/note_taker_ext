import { h, Component } from "preact";

export default function Input({ value, label, type }) {
  return (
    <div class="input-field">
      <label>{label}</label>
      <input type={type} name={label} placeholder={label} />
    </div>
  );
}
