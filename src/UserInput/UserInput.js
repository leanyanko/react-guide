import React from 'react';

const userInput = (props) => {
    // return <p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>
    const style = {
        width:'60%',
        margin: '16px auto',
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        boxShadow: '0 2px 3px #f6f',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
        <div>
            <input 
            style={style} 
            type='text' 
            onChange={props.changed} 
            value={props.currentName}/>
        </div>
    )
   
}

export default userInput;