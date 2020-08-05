import { h, Component } from "preact";
import Input from "../../components/input";
import ActionBtn from "../../components/actionbtn";

export default class Login extends Component {
  render() {
    return (
      <div id="login">
        <h3 class="section-title">Login</h3>
        <Input value="email" label="Email" type="email" />
        <Input value="password" label="Password" type="password" />
        <ActionBtn action={() => alert("User Logged In!")} label="Submit" />
      </div>
    );
  }
}
