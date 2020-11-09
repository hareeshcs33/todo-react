import React from 'react'

// function greet() {
//     return <h1>HI Hareesh</h1>
// }

const greet = (props) => {
    return (
        <div>
            <h1>HI {props.name} {props.lastName}</h1>
            {props.children}
        </div>
    )
}

export default greet