import React, { Fragment, Component } from "react";
import ListItem from "../../components/ListItem";

export default class ListAll extends Component {
  showItem = (item) => {
    this.props.viewUserNote(item);
    this.props.updateNav("show");
  };

  render() {
    let { listNotes, updateNav } = this.props;
    return (
      <Fragment>
        <h5 className="sub-section-title">All Notes</h5>
        <div className="list-container">
          <ul id="list-notes">
            {listNotes.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  index={index}
                  key={index}
                  showItem={this.showItem}
                />
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}
