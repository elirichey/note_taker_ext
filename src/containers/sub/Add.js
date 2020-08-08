import React, { Component } from "react";
import SecondaryBtn from "../../components/secondarybtn";
import NoteForm from "../../components/noteform";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      title: "",
      url: "",
      excerpt: "",
      notes: "",
    };
  }

  updateField = (e) => {
    let nextState = this.state;
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  trySubmit = () => {
    let { title, url, excerpt, notes } = this.state;
    console.log("Title: ", title);
    console.log("Url: ", url);
    console.log("Excerpt: ", excerpt);
    console.log("Notes: ", notes);
  };

  clearInputs = () => {
    this.setState({
      title: "",
      url: "",
      excerpt: "",
      notes: "",
    });
  };

  render() {
    return (
      <div class="content-container p-15">
        <h5 class="sub-section-title">New Note</h5>

        <NoteForm
          state={this.state}
          updateField={this.updateField}
          trySubmit={this.trySubmit}
        />

        <div class="d-block mb-30 mt-15">
          <SecondaryBtn action={this.clearInputs} label="Clear" />
        </div>
      </div>
    );
  }
}
