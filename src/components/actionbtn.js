import React from "react";

export default function ActionBtn(props) {
  let { action, label } = props;
  return (
    <div class="submit-field">
      <button onClick={action}>{label}</button>
    </div>
  );
}
