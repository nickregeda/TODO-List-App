import {taskAPI} from "../dal/api";

const SET_ALL_TASK = 'SET_ALL_TASK'
const ADD_NEW_TASK = 'ADD_NEW_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK'

let initialState = {
    tasks: [],
}

let taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(t => t._id !== action.id)
            }
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(t => t._id === action.id ? {
                    ...t,
                    description: action.updatedTask.description
                } : t),
                // tasks: state.tasks.map(t => t._id === action.id ? action.updatedTask : t),
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(t => t._id === action.id ? {...t, completed: action.completedTask.completed} : t),
            }
        case SET_ALL_TASK:
            return {
                ...state,
                tasks: action.tasks,
            }
        default:
            return state;
    }
}

export default taskReducer;

//action creators
export const setAllTask = (tasks) => ({type: SET_ALL_TASK, tasks});
export const addNewTask = (task) => ({type: ADD_NEW_TASK, task});
export const deleteTask = (id) => ({type: DELETE_TASK, id})
export const updateTask = (id, updatedTask) => ({type: UPDATE_TASK, id, updatedTask});
export const completeTask = (id, completedTask) => ({type: COMPLETE_TASK, id, completedTask});

//thunk creators
export const getAllTask = (token) => {
    return (dispatch) => {
        taskAPI.getAllTask(token).then(
            respone => {
                dispatch(setAllTask(respone.data.data))
            }
        )
    }
}

export const addTask = (description, token) => {
    return (dispatch) => {
        taskAPI.addTask(description, token).then(
            response => {
                dispatch(addNewTask(response.data.data))
            }
        )
    }
}

export const deleteTaskRequest = (id, token) => {
    return (dispatch) => {
        taskAPI.deleteTask(id, token).then(
            response => {
                dispatch(deleteTask(id));
            }
        )
    }
}

export const updateTaskRequest = (id, description, token) => {
    return (dispatch) => {
        taskAPI.updateTaskDescription(id, description, token).then(
            response => {
                dispatch(updateTask(id, response.data.data));
            }
        )
    }
}

export const completeTaskRequest = (id, completed, token) => {
    return (dispatch) => {
        taskAPI.completedTask(id, completed, token).then(
            response => {
                debugger
                dispatch(completeTask(id, response.data.data))
            }
        )
    }
}