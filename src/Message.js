import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Message.css'
const  Message=forwardRef(({id,contents:{
    timestamp,displayName,email,photo,uid,message
}},ref)=> {

    const user=useSelector(selectUser)
   
    return (
        <div ref={ref}className={`message ${user.email===email && "message_sender"}`}>
            <Avatar src={photo} className="message_photo"/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}
            </small>
        </div>
    );
})

export default Message;