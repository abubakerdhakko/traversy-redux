import { GET_LOGS, } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    current: null,
    filtered: [],
    value: '',
    // works: []
    // clearSearchField: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
