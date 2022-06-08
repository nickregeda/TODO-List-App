import s from '../ToDoList.module.css';

const Task = (props) => {
    let createdAt = props.createdAt.substr(0, 10);
    return (
        <div className={s.task_container}>
            <div>
                <div className={s.description}>{props.description}</div>
                <div className={s.createdAt}>{createdAt}</div>
            </div>
            <div>
                <button onClick={() => {
                    props.onDeleteTask(props.id)
                }}>Delete
                </button>
            </div>
        </div>
    )
}

export default Task;