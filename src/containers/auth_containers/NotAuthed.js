// Need add login / sign up here

import { h, Component, Fragment } from "preact";
import SignUp from "../sub/SignUp";
import Login from "../sub/Login";

export default class NotAuthed extends Component {
  constructor() {
    super();
    this.state = {
      show_login: true,
      show_signup: !true,
    };
  }

  render() {
    let { show_login, show_signup } = this.state;
    return (
      <Fragment>
        {show_login ? <SignUp /> : null}
        {show_signup ? <Login /> : null}
      </Fragment>
    );
  }
}
