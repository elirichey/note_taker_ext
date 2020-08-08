// Need add login / sign up here

import React, { Component } from "react";
import SignUp from "../containers/SignUp/SignUp";
import Login from "../containers/Login/Login";
import Landing from "../containers/Landing/Landing";

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
      <div id="app">
        {show_signup ? (
          <SignUp showLogin={this.showLogin} close={this.close} />
        ) : null}
        {show_login ? (
          <Login showSignUp={this.showSignUp} close={this.close} />
        ) : null}

        {!show_login && !show_signup ? (
          <Landing showLogin={this.showLogin} showSignUp={this.showSignUp} />
        ) : null}
      </div>
    );
  }
}
