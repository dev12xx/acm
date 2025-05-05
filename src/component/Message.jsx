import React from 'react'
import { useState } from 'react'
function Message() {
    const [message, setMessage] = useState({
        color: 'white',
        fontSize: '14px',
        fontFamily: 'Arial'
    });
    const change = () => {
        setMessage({
            color: 'red',
            fontSize: '25px',           
        });
    }
    const reset=()=>{
        setMessage();
    }
    return (
        <div>
            <p style={message}>bounjour</p>           
            <button onMouseEnter={change}> Changer </button> 
            <button onClick={reset}>reset</button>
        </div>
    );
}
export default Message;