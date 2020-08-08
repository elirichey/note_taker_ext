import Account from "./Account";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
