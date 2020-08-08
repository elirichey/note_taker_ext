import React, { Component } from "react";
import SecondaryBtn from "../../components/SecondaryBtn";
import NoteForm from "../../components/NoteForm";
import ShowItemControls from "../../components/ShowItemControls";

export default class ShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: "",
      url: "",
      excerpt: "",
      notes: "",
    };
  }

  componentDidMount() {
    let { title, url, excerpt, notes } = this.props.viewNote;
    this.setState({
      title,
      url,
      excerpt,
      notes,
    });
  }

  componentWillUnmount() {
    this.props.clearViewUserNote();
  }

  toggleEdit = () => {
    let { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing,
    });
    this.revertText();
  };

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
    this.props.viewUserNote(data);
    this.props.editUserNote(data);
  };

  deleteItem = () => {
    let { viewNote } = this.props;
    this.props.updateNav("list");
    this.props.clearViewUserNote();
    this.props.removeUserNote(viewNote);
  };

  revertText = () => {
    let { title, url, excerpt, notes } = this.props.viewNote;
    this.setState({
      title,
      url,
      excerpt,
      notes,
    });
  };

  render() {
    let { isEditing } = this.state;
    return (
      <div className="content-container p-15">
        <ShowItemControls
          toggleEdit={this.toggleEdit}
          deleteItem={this.deleteItem}
          isEditing={isEditing}
        />

        <h5 className="sub-section-title">Edit Note</h5>

        <NoteForm
          state={this.state}
          updateField={this.updateField}
          trySubmit={this.trySubmit}
        />

        {isEditing ? (
          <div className="d-block mb-30 mt-15">
            <SecondaryBtn action={this.revertText} label="Cancel Updates" />
          </div>
        ) : null}
      </div>
    );
  }
}
