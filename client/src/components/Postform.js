import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost, createPost, clearCurrent } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
    if (nextProps.currentPost) {
      this.setState({
        title: nextProps.currentPost.title,
        body: nextProps.currentPost.body
      })
    }
  }
  
  onSubmit(e) {
    e.preventDefault();
    if (this.props.currentPost === null) {
      const post = {
        title: this.state.title,
        body: this.state.body
      };
      this.props.createPost(post);
    } else {
      console.log('edit Post')
      const post = {
        id: this.props.currentPost.id,
        title: this.state.title,
        body: this.state.body
      };
      this.props.editPost(post)
      this.setState({
        title: '',
        body: ''
      })
    }
  }
  
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">{(this.props.currentPost === null) ? 'Submit' : 'edit'} </button>

          {(this.props.currentPost != null) ? < button onClick={() => this.props.clearCurrent()} type="submit">Clear</button> : ''}
        </form>
      </div >
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentPost: state.posts.current
});

export default connect(mapStateToProps, { createPost, clearCurrent, editPost })(PostForm);
