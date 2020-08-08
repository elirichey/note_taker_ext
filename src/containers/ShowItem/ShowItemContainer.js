import ShowItem from "./ShowItem";
import { connect } from "react-redux";
import { updateNav } from "../../redux/actions/nav";
import {
  viewUserNote,
  editUserNote,
  removeUserNote,
  clearViewUserNote,
} from "../../redux/actions/user";

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  listNotes: state.user.listNotes,
  viewNote: state.user.viewNote,
});

function mapDispatchToProps(dispatch) {
  return {
    updateNav: (data) => dispatch(updateNav(data)),
    viewUserNote: (data) => dispatch(viewUserNote(data)),
    editUserNote: (data) => dispatch(editUserNote(data)),
    removeUserNote: (data) => dispatch(removeUserNote(data)),
    clearViewUserNote: (data) => dispatch(clearViewUserNote(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);
