import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { deletePost } from '../actions/postActions';
import { SetCurrent } from '../actions/postActions';


class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post, index) => (
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => this.props.deletePost(post.id)}>X</button>
        <button onClick={() => this.props.SetCurrent(post)}>Update Post</button>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  // currentPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  // currentPost: state.posts.current
});

export default connect(mapStateToProps, { fetchPosts, deletePost, SetCurrent })(Posts);
