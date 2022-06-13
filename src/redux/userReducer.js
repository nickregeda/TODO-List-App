import {userAPI} from "../dal/api";

const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    isAuth: false,
    autn_token: '',
    profile: {}
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case SET_AUTH_TOKEN:
            return {
                ...state,
                auth_token: action.token,
            }
        default:
            return state;
    }
}

export default userReducer;

//action creators
export const setAuthToken = (token) => ({type: SET_AUTH_TOKEN, token});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

//thunk creators
export const login = (email, password) => {
    return (dispatch) => {
        userAPI.login(email, password).then(
            response => {
                if (response.status === 200) {
                    dispatch(setIsAuth(true))
                    dispatch(setAuthToken(response.data.token))
                }
            }
        )
    }
}

export const logout = (token) => {
    return (dispatch) => {
        userAPI.logout(token).then(
            response => {
                dispatch(setIsAuth(false));
            }
        )
    }
}

export const getMe = (token) => {
    return (dispatch) => {
        userAPI.getMe(token).then(
            response => {
                dispatch(setUserProfile(response.data))
            }
        )
    }
}

export const updateUserProfile = (name, email, age, token) => {
    return (dispatch) => {
        userAPI.updateUserProfile(name, email, age, token).then(
            response => {
                dispatch(setUserProfile(response.data.data))
            }
        )
    }
}