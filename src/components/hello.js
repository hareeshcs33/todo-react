import React from 'react'

const Hello = () => {
    //with jsx code
    
    // return (
    //     <div>
    //         <h1>Hello Hareesh</h1>
    //     </div>
    // )
    
    
    //without jsx code
    return (
        React.createElement(
            'div',
            {id: 'hello', class: 'simple-text'},
            React.createElement('h1', null, 'hi Hareesh'))
    )
}

export default Hello