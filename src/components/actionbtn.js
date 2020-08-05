import { h } from "preact";

export default function ActionBtn({ action, label }) {
  return (
    <div class="submit-field">
      <button onClick={() => action()}>{label}</button>
    </div>
  );
}
