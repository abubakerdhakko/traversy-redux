import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFunc } from '../actions/postActions';
import { clearSearch } from '../actions/postActions';


class searchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        }
    }
    componentDidMount() {
        this.props.clearSearch()
    }
    handleChange = event => {
        this.setState({ filter: event.target.value });
        if (event.target.value === "") {
            this.props.clearSearch()
        } else {
            this.props.searchFunc(event.target.value)
        }

    };

    render() {

        return (
            <div className="exampleInputBar">
                <input value={this.state.filter} onChange={this.handleChange} placeholder="Search" />
                {/* <input type="button" onClick={this.props.clearSearch()} value="zzzzzz"></input> */}
            </div >
        );
    }
}
const mapStateToProps = state => ({
    filteredItems: state.posts.filtered,
});





export default connect(mapStateToProps, { searchFunc, clearSearch })(searchBar);