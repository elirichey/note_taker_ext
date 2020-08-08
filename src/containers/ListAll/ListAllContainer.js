import ListAll from "./ListAll";
import { connect } from "react-redux";
import { updateNav } from "../../redux/actions/nav";
import { viewUserNote, clearViewUserNote } from "../../redux/actions/user";

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  listNotes: state.user.listNotes,
});

function mapDispatchToProps(dispatch) {
  return {
    updateNav: (data) => dispatch(updateNav(data)),
    viewUserNote: (data) => dispatch(viewUserNote(data)),
    clearViewUserNote: (data) => dispatch(clearViewUserNote(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAll);
