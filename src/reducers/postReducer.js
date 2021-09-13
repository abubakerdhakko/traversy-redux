import { FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST, SET_CURRENT, CLEAR_CURRENT } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  current: null

};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_POST:
      console.log('DELETE_POST_reducer,...state', action.payload, ...state)
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        ),
      };
    case SET_CURRENT:
      // console.log('SET_CURRENT', )
      return {
        ...state,
        current: action.payload
      };
    // edit
    case UPDATE_POST:
      console.log('UPDATE_POST',)
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      console.log('CLEAR_CURRENT')
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
}
