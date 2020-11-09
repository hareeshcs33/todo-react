import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => {
        //         console.log('callback value', this.state.count)
        //     }
        // )
        // console.log(this.state.count)

        this.setState(previousState => ({
            count: previousState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFiveTimes() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h2>count - {this.state.count}</h2>
                <button onClick={() => this.incrementFiveTimes()}>Increment</button>
            </div>
        )
    }
}

export default Counter