import { h } from "preact";

export default function TextArea({ value, label, rows }) {
  return (
    <div class="input-field">
      <label>{label}</label>
      <textarea name={value} placeholder={label} rows={rows} />
    </div>
  );
}
