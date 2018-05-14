import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    // return <p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>
    
    return (
        <div className="Output">
            <p>{props.username}</p>  
            <p>putput</p>
        </div>
    )
   
}

export default userOutput;