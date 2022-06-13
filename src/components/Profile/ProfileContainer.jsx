import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    profile: state.userReducer.profile
});

export default connect(mapStateToProps, {})(Profile)
