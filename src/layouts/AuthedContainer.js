import Authed from "./Authed";
import { connect } from "react-redux";
import { updateNav } from "../redux/actions/nav";

const mapStateToProps = (state) => ({
  navRoot: state.navigation.navRoot,
});

function mapDispatchToProps(dispatch) {
  return {
    updateNav: (data) => dispatch(updateNav(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authed);
