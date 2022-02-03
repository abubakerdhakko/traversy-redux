
import React, { Component } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { deletePost } from '../actions/postActions';
import { SetCurrent } from '../actions/postActions';

import Pagination from "react-js-pagination";



class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15,
      projectList: '',
      itemPerPage: 5,
    };
  }


  handlePageChange(pageNumber) {

    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
    if (nextProps.filteredPosts) {
      console.log('hello')
      this.props.posts.unshift(nextProps.newPost);

    }

  }

  render() {


    var indexOfLastTodo = this.state.activePage * this.state.itemPerPage;
    var indexOfFirstTodo = indexOfLastTodo - this.state.itemPerPage;
    var renderedProjects = this.props.posts.slice(indexOfFirstTodo, indexOfLastTodo);

    // console.log('filteredPosts', typeof renderedProjects);
    return (
      <div className="post_Sec">
        <h1>Posts</h1>
        {
          this.props.filteredPosts.length !== 0 ?

            this.props.filteredPosts.map((post, index) => (
              <div key={index}>
                <h1 className="redColor">filteredPosts</h1>

                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => this.props.deletePost(post.id)}>X</button>
                <button onClick={() => this.props.SetCurrent(post)}>Update Post</button>
              </div>
            ))
            // < h1 className="redColor">filteredPosts</h1>

            :
            renderedProjects.map((post, index) => (
              <div key={index}>
                <h3>
                  {/* <span>{post.id}</span>- */}
                  {post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => this.props.deletePost(post.id)}>X</button>
                <button onClick={() => this.props.SetCurrent(post)}>Update Post</button>
              </div>
            ))


        }
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemPerPage}
          totalItemsCount={this.props.posts.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />

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
  filteredPosts: state.posts.filtered,
  // currentPost: state.posts.current
});

export default connect(mapStateToProps, { fetchPosts, deletePost, SetCurrent })(Posts);











