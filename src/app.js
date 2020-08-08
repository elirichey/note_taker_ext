import React, { Component } from "react";

import Authed from "./containers/auth_containers/Authed";
import NotAuthed from "./containers/auth_containers/NotAuthed";

export default class App extends Component {
  constructor() {
    super();

    // This will be repalced with Redux!
    this.state = {
      authed: !false,
    };
  }

  render() {
    return <div id="app">{this.state.authed ? <Authed /> : <NotAuthed />}</div>;
  }
}
