
import React, { Component } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authAction'





class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push('/');
    }

  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      email: this.state.email,
      password: this.state.password
    };
    console.log('onSubmit', post)
    loginAction(post)
  }

  render() {



    return (
      <div className="post_Sec">

        <div className='form-container'>
          <h1>
            Account <span className='text-primary'>Login</span>
          </h1>
          <form onSubmit={this.onSubmit}>
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
              value='Login'
              className='btn btn-primary btn-block'
            />
          </form>
        </div>
      </div>
    );
  }
}

login.propTypes = {
  // fetchPosts: PropTypes.func.isRequired,
  // posts: PropTypes.array.isRequired,
  // newPost: PropTypes.object,
  // currentPost: PropTypes.object
};

const mapStateToProps = state => ({
  authUser: state.auth.user,
  authentication: state.auth.isAuthenticated,

});

export default connect(mapStateToProps, { loginAction })(login);











