
import React, { Component } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction, registerAction } from '../../actions/authAction'





class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log('reg Component')
    registerAction(post);


  }

  render() {
    return (
      <div className="post_Sec">
        <div className='form-container'>
          <h1>
            Account <span className='text-primary'>Register</span>
          </h1>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Name</label>
              <input
                id='name'
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.onChange}
                required
              />
            </div>
            <input
              type='submit'
              value='Register'
              className='btn btn-primary btn-block'
            />
          </form>
        </div>
      </div>
    );
  }
}

register.propTypes = {
  // fetchPosts: PropTypes.func.isRequired,
  // posts: PropTypes.array.isRequired,
  // newPost: PropTypes.object,
  // currentPost: PropTypes.object
};

const mapStateToProps = state => ({
  authUser: state.auth.user,
  authentication: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginAction, registerAction })(register);











