import {connect} from "react-redux";
import Task from "./Task";
import {completeTaskRequest, deleteTaskRequest, updateTaskRequest} from "../../../redux/taskReducer";

let mapStateToProps = (state) => ({
    token: state.userReducer.auth_token,
});

export default connect(mapStateToProps, {deleteTaskRequest, updateTaskRequest, completeTaskRequest})(Task);