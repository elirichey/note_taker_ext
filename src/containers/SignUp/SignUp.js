import React, { Component, Fragment } from "react";
import Input from "../../components/Input";
import ActionBtn from "../../components/ActionBtn";
import SecondaryBtn from "../../components/SecondaryBtn";
import Back from "../../components/Back";

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

    if (password !== password2) {
      return alert("Passwords do not match");
    }

    console.log("First Name: ", name_first);
    console.log("Last Name: ", name_last);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Password2: ", password2);
  };

  render() {
    let { name_first, name_last, email, password, password2 } = this.state;

    return (
      <Fragment>
        <div id="signup">
          <h3 className="section-title">Sign Up</h3>

          <Input
            name="name_first"
            value={name_first}
            label="First Name"
            type="text"
            onChange={this.updateField}
          />
          <Input
            name="name_last"
            value={name_last}
            label="Last Name"
            type="text"
            onChange={this.updateField}
          />
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
          <Input
            name="password2"
            value={password2}
            label="Please Retype Password"
            type="password"
            onChange={this.updateField}
          />

          <div className="d-block mt-30 mb-15">
            <ActionBtn action={this.trySubmit} label="Submit" />
          </div>

          <div className="d-block mb-30 mt-15">
            <SecondaryBtn action={() => this.props.showLogin()} label="Login" />
          </div>
        </div>
        <Back goBack={() => this.props.close()} />
      </Fragment>
    );
  }
}
