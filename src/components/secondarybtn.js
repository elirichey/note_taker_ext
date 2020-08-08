import React from "react";

export default function SecondaryBtn(props) {
  let { action, label } = props;
  return (
    <div class="secondary-btn">
      <button onClick={action}>{label}</button>
    </div>
  );
}
