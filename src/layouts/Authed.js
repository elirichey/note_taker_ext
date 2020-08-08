import React, { Component } from "react";
import Header from "../components/header";
import Add from "../containers/Add/Add";
import ListAll from "../containers/ListAll/ListAll";
import ShowItem from "../containers/ShowItem/ShowItem";
import Account from "../containers/Account/Account";

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
      <div id="app">
        <Header
          updateDisplay={this.updateDisplay}
          currentTab={this.state.currentTab}
        />

        <section id="content-body">
          {this.renderDisplay(this.state.currentTab)}
        </section>
      </div>
    );
  }
}
