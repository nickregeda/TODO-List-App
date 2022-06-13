import s from './ToDoList.module.css'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {Navigate} from 'react-router-dom';
import {useEffect} from "react";
import ProfileContainer from "../Profile/ProfileContainer";
import Task from "./Task/Task";
import TaskContainer from "./Task/TaskContainer";

const ToDoList = (props) => {
    useEffect(() => {
        props.getAllTask(props.token)
    }, [])
    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    let onAddTask = (values) => {
        props.addTask(values.new_task, props.token)
    }

    let tasksElements = props.tasks.map(t => <TaskContainer key={t._id} id={t._id} description={t.description}
                                                            createdAt={t.createdAt} updatedAt={t.updatedAt}
                                                            completed={t.completed}/>)

    return (
        <div className={s.container}>
            <div>
                <ProfileContainer/>
            </div>
            <div className={s.form_container}>
                <Formik
                    initialValues={{new_task: ''}}
                    onSubmit={(values, {resetForm}) => {
                        onAddTask(values);
                        resetForm({new_task: ''})
                    }}>
                    <Form className={s.form}>
                        <div>
                            <label className={s.todos_label} htmlFor="new_task">TODOS</label>
                            <Field className={s.field} name={'new_task'} type={'text'}
                                   placeholder={'Enter task description...'}/>
                            <ErrorMessage className={s.error_mes} name={'new_task'} component={'div'}/>
                        </div>
                        <button>ADD TASK</button>
                    </Form>
                </Formik>
            </div>
            <div className={s.tasks}>
                {tasksElements}
            </div>
        </div>
    )
}

export default ToDoList;