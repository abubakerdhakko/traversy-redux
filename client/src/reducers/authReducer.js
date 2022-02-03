import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, Check_Error, REGISTER_SUCCESS, REGISTER_FAIL, Check } from '../actions/types';

const initialState = {
    AuthLogs: [],
    // token: '',
    // isAuthenticated: false,
    // loading: '',
    // user: '',
    // error: '',

    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Check:
            console.log('Reducer check check 123')
            return {
            };
        case Check_Error:
            console.log('Reducer Check_Error check check 123')
            return {
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
            console.log('REGISTER_SUCCESS_reducer')
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
            console.log('REGISTER_fail_reducer')
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        default:
            return state;
    }
}











