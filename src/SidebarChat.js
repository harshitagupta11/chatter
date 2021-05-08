import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './SidebarChat.css';
import db from './firebase';
import {setChat} from './features/chatSlice';
import * as timeago from 'timeago.js';



function SidebarChat({id,chatName}) {
    const dispatch=useDispatch()
    const [chatInfo,setChatInfo]=useState([])
    useEffect(()=>{
        console.log(id,"sidechat")
        db.collection('chats')
        .doc(id).
        collection('messages').
        orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            let chats=snapshot.docs.map((doc)=>doc.data())
            setChatInfo(chats)
            
        })
    },[id])
   
    return (
        <div className="sidebarChat"
         onClick={()=>
            
            dispatch(
                setChat({
                    chatId:id,
                    chatName:chatName,
                })
            )
        }>
            <Avatar src={chatInfo[0]?.photo }/>
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                {chatInfo[0] &&<small>{timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}</small>}
            </div>
        </div>
    );
}

export default SidebarChat;