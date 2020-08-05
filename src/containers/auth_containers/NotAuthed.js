import { h, Component, Fragment } from "preact";

export default class NotAuthed extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Fragment>Not Authed</Fragment>;
  }
}
