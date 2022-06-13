import App from "./App";
import {connect} from "react-redux";
import {getMe} from "./redux/userReducer";

let mapStateToProps = (state) => ({
    token: state.userReducer.auth_token,
    isAuth: state.userReducer.isAuth,
})

export default connect(mapStateToProps, {getMe})(App);