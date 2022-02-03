import { FETCH_POSTS, NEW_POST, DELETE_POST, SET_CURRENT, CLEAR_CURRENT, UPDATE_POST, SEARCH_FILTER, CLEAR_Filter } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};


export const deletePost = postId => dispatch => {
  console.log('PostId', postId);
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  })
  dispatch({
    type: DELETE_POST,
    payload: postId
  });
}

export const editPost = post => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify({ post }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
  dispatch({
    type: UPDATE_POST,
    payload: post
  });

}
export const clearCurrent = () => dispatch => {
  console.log('clearCurrent')
  dispatch({
    type: CLEAR_CURRENT,
    payload: ''
  });
}

export const SetCurrent = post => dispatch => {

  dispatch({
    type: SET_CURRENT,
    payload: post
  });
};

export const searchFunc = PostFilter => dispatch => {
  dispatch({
    type: SEARCH_FILTER,
    payload: PostFilter
  });
};
export const clearSearch = () => dispatch => {
  console.log('clearSearch')
  dispatch({ type: CLEAR_Filter });
};

