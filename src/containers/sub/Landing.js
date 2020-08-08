import React, { Component } from "react";
import ActionBtn from "../../components/actionbtn";

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div class="hello-user">
          <h3>Welcome to Sten</h3>
        </div>

        <div class="d-block mt-30 mb-15">
          <ActionBtn action={this.props.showSignUp} label="Sign Up" />
        </div>

        <div class="d-block mb-30 mt-15">
          <ActionBtn action={this.props.showLogin} label="Login" />
        </div>
      </div>
    );
  }
}
