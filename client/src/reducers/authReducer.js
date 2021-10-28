import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
    AuthLogs: [],
    // token: '',
    // isAuthenticated: false,
    // loading: '',
    // user: '',
    // error: '',

    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case USER_LOADED:
        //     return {
        //         ...state,
        //         AuthLogs: action.payload
        //     };

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        default:
            return state;
    }
}
