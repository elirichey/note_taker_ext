import Router from "./Router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
