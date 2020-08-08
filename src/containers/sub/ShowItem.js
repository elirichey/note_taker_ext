import React, { Component } from "react";
import SecondaryBtn from "../../components/secondarybtn";
import NoteForm from "../../components/noteform";

export default class ShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      // Original Text
      ogTitle: "",
      ogUrl: "",
      ogExcerpt: "",
      ogNotes: "",
      // Updated Text
      title: "",
      url: "",
      excerpt: "",
      notes: "",
    };
  }

  componentDidMount() {
    console.log("Set the incoming value to state... ");
    // this.setState({ ogTitle: "", ogUrl: "", ogExcerpt: "", ogNotes: "", title: "", url: "", excerpt: "", notes: "", });
  }

  toggleEdit = () => {
    let { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing,
    });
  };

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

  revertText = () => {
    let { ogTitle, ogUrl, ogExcerpt, ogNotes } = this.state;
    this.setState({
      title: ogTitle,
      url: ogUrl,
      excerpt: ogExcerpt,
      notes: ogNotes,
    });
  };

  render() {
    let { isEditing } = this.state;
    return (
      <div className="content-container p-15">
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
