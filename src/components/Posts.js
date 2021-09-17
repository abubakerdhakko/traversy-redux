
import React, { Component } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { deletePost } from '../actions/postActions';
import { SetCurrent } from '../actions/postActions';

import ReactPaginate from 'react-paginate';



class Posts extends Component {

  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0
    }

    this.handlePageClick = this.handlePageClick.bind(this);

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

    // <Fragment>
    //   {contacts !== null && !loading ? (
    //     <TransitionGroup>
    //       {filtered !== null
    //         ? filtered.map(contact => (
    //             <CSSTransition
    //               key={contact._id}
    //               timeout={500}
    //               classNames='item'
    //             >
    //               <ContactItem contact={contact} />
    //             </CSSTransition>
    //           ))
    //         : contacts.map(contact => (
    //             <CSSTransition
    //               key={contact._id}
    //               timeout={500}
    //               classNames='item'
    //             >
    //               <ContactItem contact={contact} />
    //             </CSSTransition>
    //           ))}
    //     </TransitionGroup>
    //   ) : (
    //     <Spinner />
    //   )}
    // </Fragment>


    return (
      <div className="post_Sec">
        <h1>Posts</h1>
        {
          this.props.filteredPosts !== null ?

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
            this.props.posts.map((post, index) => (
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
