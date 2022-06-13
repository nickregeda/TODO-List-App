import ToDoList from "./ToDoList";
import {connect} from "react-redux";
import {addTask, deleteTaskRequest, getAllTask, updateTaskRequest} from "../../redux/taskReducer";
import {compose} from "redux";
import withAuthNavigate from "../../hoc/WithAuthNavigate";

let mapStateToProps = (state) => ({
    isAuth: state.userReducer.isAuth,
    token: state.userReducer.auth_token,
    tasks: state.taskReducer.tasks,
});

export default compose(
    connect(mapStateToProps, {getAllTask, addTask}),
    withAuthNavigate,
)
(ToDoList);