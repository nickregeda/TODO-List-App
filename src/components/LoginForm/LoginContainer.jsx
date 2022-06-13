import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/userReducer";

let mapStateToProps = (state) => ({
    isAuth: state.userReducer.isAuth,
});

export default connect(mapStateToProps, {login})(Login)
