import { h } from "preact";

export default function TextArea({ name, value, label, rows, onInput }) {
  return (
    <div class="input-field">
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={label}
        rows={rows}
        onInput={onInput}
      />
    </div>
  );
}
