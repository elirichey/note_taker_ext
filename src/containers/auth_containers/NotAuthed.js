// Need add login / sign up here

import { h, Component, Fragment } from "preact";
import SignUp from "../sub/SignUp";
import Login from "../sub/Login";
import Landing from "../sub/Landing";

export default class NotAuthed extends Component {
  constructor() {
    super();
    this.state = {
      show_login: false,
      show_signup: false,
    };
  }

  showLogin = () => {
    this.setState({ show_login: true, show_signup: false });
  };
  showSignUp = () => {
    this.setState({ show_login: false, show_signup: true });
  };
  close = () => {
    console.log("Closed");
    this.setState({ show_login: false, show_signup: false });
  };

  render() {
    let { show_login, show_signup } = this.state;
    return (
      <Fragment>
        {show_signup ? (
          <SignUp showLogin={this.showLogin} close={this.close} />
        ) : null}
        {show_login ? (
          <Login showSignUp={this.showSignUp} close={this.close} />
        ) : null}

        {!show_login && !show_signup ? (
          <Landing showLogin={this.showLogin} showSignUp={this.showSignUp} />
        ) : null}
      </Fragment>
    );
  }
}
