import React from "react";

export default function Back(props) {
  return (
    <div className="back-button">
      <button onClick={props.goBack}>Back</button>
    </div>
  );
}
