import { FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST, SET_CURRENT, CLEAR_CURRENT, SEARCH_FILTER, CLEAR_Filter } from '../actions/types';

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
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    // edit
    case UPDATE_POST:
      return {
        ...state,
        items: state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        current: null,
      }
    // CLEAR_CURRENT
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    // search Filter
    case SEARCH_FILTER:
      console.log('action.payload', action.payload)
      return {
        ...state,
        filtered: state.items.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          // const regex = action.payload;
          return contact.title.match(regex) || contact.body.match(regex);
        })
      };

    // Clear Filter
    case CLEAR_Filter:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
}
