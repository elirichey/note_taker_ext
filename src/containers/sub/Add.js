import { h, Component } from "preact";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
import ActionBtn from "../../components/actionbtn";
import SecondaryBtn from "../../components/secondarybtn";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      quote: "",
      notes: "",
    };
  }

  updateField = (e) => {
    let nextState = this.state;
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  trySubmit = () => {
    let { email, password } = this.state;
    console.log("State: ", this.state);
  };

  clearInputs = () => {
    this.setState({
      title: "",
      url: "",
      quote: "",
      notes: "",
    });
  };

  render() {
    let { title, url, quote, notes } = this.state;
    return (
      <div class="content-container p-15">
        <h5 class="sub-section-title">New Note</h5>

        <Input
          name="title"
          value={title}
          label="Title"
          type="text"
          onInput={this.updateField}
        />

        <Input
          name="url"
          value={url}
          label="URL"
          type="text"
          onInput={this.updateField}
        />

        <TextArea
          name="quote"
          value={quote}
          label="Quoted Text"
          rows="10"
          onInput={this.updateField}
        />

        <TextArea
          name="notes"
          value={notes}
          label="Notes"
          rows="10"
          onInput={this.updateField}
        />

        <div class="d-block mt-30 mb-15">
          <ActionBtn action={this.trySubmit} label="Save" />
        </div>

        <div class="d-block mb-30 mt-15">
          <SecondaryBtn action={this.clearInputs} label="Clear" />
        </div>
      </div>
    );
  }
}
