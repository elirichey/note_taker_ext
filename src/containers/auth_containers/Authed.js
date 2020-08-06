import { h, Component, Fragment } from "preact";
import Header from "../../components/header";
import Add from "../Sub/Add";
import ListAll from "../Sub/ListAll";
import ShowItem from "../Sub/ShowItem";
import Account from "../Sub/Account";

export default class Authed extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "add",
    };
  }

  updateDisplay = (view) => {
    this.setState({
      currentTab: view,
    });
  };

  renderDisplay = (currentTab) => {
    switch (currentTab) {
      case "add":
        return <Add />;
      case "list":
        return <ListAll />;
      case "show":
        return <ShowItem />;
      case "account":
        return <Account user="me" />;
      default:
        return "Error";
    }
  };

  render() {
    return (
      <Fragment>
        <Header
          updateDisplay={this.updateDisplay}
          currentTab={this.state.currentTab}
        />

        <section id="content-body">
          {this.renderDisplay(this.state.currentTab)}
        </section>
      </Fragment>
    );
  }
}
