import Navbar from "./Navbar";
import {connect} from "react-redux";
import {logout} from "../../redux/userReducer";

let mapStateToProps = (state) => ({
    token: state.userReducer.auth_token,
    isAuth: state.userReducer.isAuth,
})

export default connect(mapStateToProps, {logout})(Navbar);