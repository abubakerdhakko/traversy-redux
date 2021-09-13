import { FETCH_POSTS, NEW_POST, DELETE_POST, SET_CURRENT, CLEAR_CURRENT, UPDATE_POST } from './types';

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
  console.log('editPost', post.id);
  // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  // })
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

  dispatch({ type: SET_CURRENT, payload: post });
};
