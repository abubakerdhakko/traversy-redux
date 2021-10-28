import React, { Component } from 'react'
import SearchBar from './searchBar'
import Postform from './Postform'
import Posts from './Posts'
class Home extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Postform />
                <hr />
                <Posts />
            </div>
        )
    }
}
export default (Home)