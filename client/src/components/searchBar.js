import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFunc } from '../actions/postActions';
import { clearSearch } from '../actions/postActions';


class searchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            typing: false,
            typingTimeout: 0
        }
    }
    componentDidMount() {
        this.props.clearSearch()
    }
    handleChange = event => {


        // this.setState({ filter: event.target.value });
        // if (event.target.value === "") {


        //     this.props.clearSearch()
        // } else {

        //     this.props.searchFunc(event.target.value)
        // }

        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        self.setState({
            filter: event.target.value,
            typing: false,
            typingTimeout: setTimeout(function () {
                self.props.searchFunc(self.state.filter);
            }, 1000)
        });

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