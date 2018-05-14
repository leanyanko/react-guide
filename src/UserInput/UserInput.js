import React from 'react';

const userInput = (props) => {
    // return <p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>
    
    return (
        <div>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
   
}

export default userInput;