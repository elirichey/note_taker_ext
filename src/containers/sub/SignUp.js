import { h, Component } from "preact";
import Input from "../../components/input";
import ActionBtn from "../../components/actionbtn";

export default class SignUp extends Component {
  render() {
    return (
      <div id="signup">
        <h3 class="section-title">Sign Up</h3>
        <Input value="name_first" label="First Name" type="text" />
        <Input value="name_last" label="Last Name" type="text" />
        <Input value="email" label="Email" type="email" />
        <Input value="password" label="Password" type="password" />
        <Input
          value="password2"
          label="Please Retype Password"
          type="password"
        />
        <ActionBtn
          action={() => alert("User Sign Up Complete!")}
          label="Submit"
        />
      </div>
    );
  }
}
