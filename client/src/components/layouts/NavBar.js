import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// const NavBar = ({ title, icon }) => {
class NavBar extends Component {

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


    render() {
        const { id, title, icon } = this.props
        const authLinks = (
            <Fragment>
                <li>Hello </li>
                <li>email </li>
                <li>password </li>
                <li>
                    <a >
                        <i className='fas fa-sign-out-alt' />{' '}
                        <span className='hide-sm'>Logout</span>
                    </a>
                </li>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                {/* <li>
                    <Link to='/home'>Home</Link>
                </li> */}
            </Fragment>
        );
        return (
            <div className='navbar bg-primary' >
                <h1>
                    <Link to='/'>
                        <i className={icon} /> {title}
                    </Link>
                </h1>
                <ul>{this.props.CheckIsAuthenticated ? authLinks : guestLinks}</ul>
            </div>
        );
    }
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

NavBar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};
const mapStateToProps = state => ({
    CheckIsAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(NavBar);



