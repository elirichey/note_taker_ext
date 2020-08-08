import Add from "./Add";
import { connect } from "react-redux";
import { addUserNote } from "../../redux/actions/user";

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

function mapDispatchToProps(dispatch) {
  return {
    addUserNote: (data) => dispatch(addUserNote(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
