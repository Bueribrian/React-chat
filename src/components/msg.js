import React from 'react'

export default function Message( props ){
    
        return (
                <div className='message'>
                    <div className='msg-user'>{props.msg.senderId}</div>
                    <div className='msg-text'>{props.msg.text}</div>
                </div>
            )
    
}