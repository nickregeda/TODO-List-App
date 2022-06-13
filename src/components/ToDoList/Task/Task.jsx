import s from '../ToDoList.module.css';
import {useState} from "react";
import {Form, Formik, Field} from "formik";
import {completeTaskRequest} from "../../../redux/taskReducer";

const Task = (props) => {
    const [onUpdate = false, setOnUpdate] = useState();

    let onDeleteTask = (id) => {
        props.deleteTaskRequest(id, props.token)
    }
    let onUpdateTask = (description) => {
        props.updateTaskRequest(props.id, description, props.token);
    }

    let createdAt = props.createdAt.substr(0, 10);
    let updatedAt = props.updatedAt.substr(0, 10);
    return (
        <div>
            {!onUpdate ?
                <div className={s.task_container}>
                    <div>
                        <div className={s.description}>{props.description}</div>
                        <div className={s.createdAt}>{createdAt}</div>
                        {createdAt === updatedAt ?
                            <></>
                            :
                            <div className={s.createdAt}>{updatedAt}</div>
                        }
                    </div>
                    <div>
                        <div style={{display: 'inline-block'}}>
                            <Formik initialValues={{completed: props.completed}}>
                                {({values}) => {
                                    return (
                                        <Form>
                                            <Field onClick={() => {
                                                props.completeTaskRequest(props.id, !values.completed, props.token)
                                            }} name={'completed'} type='checkbox'/>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                        <button onClick={() => {
                            setOnUpdate(true);
                        }}>Update
                        </button>
                        <button onClick={() => {
                            onDeleteTask(props.id)
                        }}>Delete
                        </button>
                    </div>
                </div>
                :
                <div>
                    <Formik
                        // enableReinitialize={true}
                        initialValues={{description: props.description}}
                        onSubmit={(values) => {
                            onUpdateTask(values.description)
                            setOnUpdate(false)
                        }
                        }>
                        <Form className={s.updateTaskForm}>
                            <Field className={s.updateField} name={'description'} type={'text'}/>
                            <button>Submit</button>
                        </Form>
                    </Formik>
                </div>
            }
        </div>
    )
}

export default Task;