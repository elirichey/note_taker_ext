import { h } from "preact";

export default function Back(props) {
  return (
    <div class="back-button">
      <button onClick={props.goBack}>Back</button>
    </div>
  );
}
