import ToDoList from "./ToDoList";
import {connect} from "react-redux";
import {login} from "../../redux/userReducer";

let mapStateToProps = (state) => ({
    token: state.userReducer.auth_token,
});

export default connect(mapStateToProps, {login})(ToDoList);