import React, { Component } from "react";
import Header from "../components/Header";
import HeaderBack from "../components/HeaderBack";
import AddContainer from "../containers/Add/AddContainer";
import ListAllContainer from "../containers/ListAll/ListAllContainer";
import ShowItemContainer from "../containers/ShowItem/ShowItemContainer";
import AccountContainer from "../containers/Account/AccountContainer";

export default class Authed extends Component {
  renderDisplay = (navRoot) => {
    switch (navRoot) {
      case "add":
        return <AddContainer />;
      case "list":
        return <ListAllContainer />;
      case "show":
        return <ShowItemContainer updateNav={this.props.updateNav} />;
      case "account":
        return <AccountContainer user="me" />;
      default:
        return "Error";
    }
  };

  render() {
    let { navRoot, updateNav } = this.props;
    return (
      <div id="app">
        {navRoot === "show" ? (
          <HeaderBack updateDisplay={updateNav} />
        ) : (
          <Header updateDisplay={updateNav} currentTab={navRoot} />
        )}

        <section id="content-body">{this.renderDisplay(navRoot)}</section>
      </div>
    );
  }
}
