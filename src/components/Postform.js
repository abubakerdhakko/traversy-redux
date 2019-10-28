import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onSubmit.bind(this);
    }
    onchange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <h1>add POst</h1>
                <form onsubmit={this.onSubmit}>
                    <label>Title</label>
                    <br />
                    <input name="title" className="" value='this.state.title' />
                    <br />
                    <label>body</label>
                    <br />
                    <input name="body" value='this.state.body' />
                    <br />
                    <button type="submit" className="mt-3 btn btn-primary">submit</button>
                </form>
                <hr />
            </div>
        )
    }
}
export default Postform;
