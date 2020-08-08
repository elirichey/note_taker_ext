import React, { Component, Fragment } from "react";
import Input from "../../components/input";
import ActionBtn from "../../components/actionbtn";
import SecondaryBtn from "../../components/secondarybtn";
import Back from "../../components/back";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_first: "",
      name_last: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  updateField = (e) => {
    let nextState = this.state;
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  trySubmit = () => {
    let { name_first, name_last, email, password, password2 } = this.state;
    console.log("State: ", this.state);

    if (password !== password2) {
      return alert("Passwords do not match");
    }
  };

  render() {
    let { name_first, name_last, email, password, password2 } = this.state;
    console.log("CLOSE WORKS ", () => this.props.close());

    return (
      <Fragment>
        <div id="signup">
          <h3 class="section-title">Sign Up</h3>

          <Input
            name="name_first"
            value={name_first}
            label="First Name"
            type="text"
            onInput={this.updateField}
          />
          <Input
            name="name_last"
            value={name_last}
            label="Last Name"
            type="text"
            onInput={this.updateField}
          />
          <Input
            name="email"
            value={email}
            label="Email"
            type="email"
            onInput={this.updateField}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            type="password"
            onInput={this.updateField}
          />
          <Input
            name="password2"
            value={password2}
            label="Please Retype Password"
            type="password"
            onInput={this.updateField}
          />

          <div class="d-block mt-30 mb-15">
            <ActionBtn action={this.trySubmit} label="Submit" />
          </div>

          <div class="d-block mb-30 mt-15">
            <SecondaryBtn action={() => this.props.showLogin()} label="Login" />
          </div>
        </div>
        <Back goBack={() => this.props.close()} />
      </Fragment>
    );
  }
}
