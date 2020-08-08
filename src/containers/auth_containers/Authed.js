import React, { Component, Fragment } from "react";
import Header from "../../components/header";
import Add from "../sub/Add";
import ListAll from "../sub/ListAll";
import ShowItem from "../sub/ShowItem";
import Account from "../sub/Account";

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
