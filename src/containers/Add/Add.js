import React, { Component } from "react";
import SecondaryBtn from "../../components/SecondaryBtn";
import NoteForm from "../../components/NoteForm";

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

    if (title === "") {
      return alert("Please Add Title");
    }
    if (excerpt === "" && notes === "") {
      return alert("Please add an Excerpt, Note, or both");
    }

    let data = {
      title,
      url,
      excerpt,
      notes,
    };

    console.log("Data Submitted: ", data);
    this.props.addUserNote(data);
    this.clearInputs();
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
      <div className="content-container p-15">
        <h5 className="sub-section-title">New Note</h5>

        <NoteForm
          state={this.state}
          updateField={this.updateField}
          trySubmit={this.trySubmit}
        />

        <div className="d-block mb-30 mt-15">
          <SecondaryBtn action={this.clearInputs} label="Clear" />
        </div>
      </div>
    );
  }
}
