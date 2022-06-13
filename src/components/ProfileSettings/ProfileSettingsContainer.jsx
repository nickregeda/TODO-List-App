import ProfileSettings from "./ProfileSettings";
import {connect} from "react-redux";
import withAuthNavigate from "../../hoc/WithAuthNavigate";
import {compose} from "redux";
import {updateUserProfile} from "../../redux/userReducer";

let mapStateToProps = (state) => ({
    token: state.userReducer.auth_token
});

export default compose(
    connect(mapStateToProps, {updateUserProfile}),
    withAuthNavigate,
)(ProfileSettings)