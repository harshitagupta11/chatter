import { Icon, IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';
import { selectChatName ,selectChatId} from './features/chatSlice';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Chat(props) {
    const user=useSelector(selectUser)
    const[input,setInput] = useState("")
    const chatName=useSelector(selectChatName)
    const chatId=useSelector(selectChatId)
    const [messages,setMessages]=useState([])

    useEffect(()=>{
        console.log(chatId,19)
        if(chatId){
            console.log(chatId,21)
            db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot=>{
                setMessages(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            }))
            console.log(chatId,26)
        }
    },[chatId])

    const sendMessage=(e)=>{
        e.preventDefault();
        console.log(chatId)

        db.collection('chats').doc(chatId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName

        })
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details </strong>
            </div>
            <div className="chat_messages">
                <FlipMove>
                {messages && messages.map(({id,data})=>(
               <Message key={id} contents={data}/>
           ))}
                </FlipMove>
          
            </div>
            <div className="chat_input">
                <form>
                <input value={input} type="text" placeholder="Enter Messages" onChange={(e)=>setInput(e.target.value)}></input>
                <IconButton onClick={sendMessage}>
                <SendIcon className="chat_mic"></SendIcon>
                </IconButton>
                </form>
                <IconButton>
                    <MicNone className="chat_mic"></MicNone>
                </IconButton>

            </div>
        </div>
    );
}

export default Chat;