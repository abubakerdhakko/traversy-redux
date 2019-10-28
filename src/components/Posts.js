import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ Posts: data }))

    }
    render() {
        let postsItems = this.state.Posts.map(post =>
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        );
        return (
            <div>
                {postsItems}
            </div>
        )
    }
}


export default Posts;
