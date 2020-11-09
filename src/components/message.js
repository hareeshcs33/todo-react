import React, { Component } from 'react'

class Message extends Component {
    
    constructor() {
        super()
        this.state = {
            message: "visitor message"
        }
    }

    changeMessage() {
        this.setState({
            message: 'thanks to  visitor'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>change message</button>
            </div>
        )
    }
}

export default Message