import React from 'react'

// function greet() {
//     return <h1>HI Hareesh</h1>
// }

const greet = props => {
    const {name, lastName} = props
    return (
        <div>
            <h1>HI {name} {lastName}</h1>
        </div>
    )
}

export default greet