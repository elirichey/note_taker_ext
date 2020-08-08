import React, { Component, Fragment } from "react";
import Input from "../../components/input";
import ActionBtn from "../../components/actionbtn";
import SecondaryBtn from "../../components/secondarybtn";
import Back from "../../components/back";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  updateField = (e) => {
    let nextState = this.state;
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  trySubmit = () => {
    let { email, password } = this.state;
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  render() {
    let { email, password } = this.state;
    return (
      <Fragment>
        <div id="login">
          <h3 className="section-title">Login</h3>

          <Input
            name="email"
            value={email}
            label="Email"
            type="email"
            onChange={this.updateField}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            type="password"
            onChange={this.updateField}
          />

          <div className="d-block mt-30 mb-15">
            <ActionBtn action={this.trySubmit} label="Submit" />
          </div>

          <div className="d-block mb-30 mt-15">
            <SecondaryBtn
              action={() => this.props.showSignUp()}
              label="Sign Up"
            />
          </div>
        </div>

        <Back goBack={this.props.close} />
      </Fragment>
    );
  }
}
