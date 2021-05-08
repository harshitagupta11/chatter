import { Avatar, IconButton } from '@material-ui/core';
import {  RateReviewOutlined } from '@material-ui/icons';
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Sidebar(props) {
    const user=useSelector(selectUser)
    const [chats,setChats]=useState([])
    console.log(user,"sidebar")
    useEffect(()=>{
        db.collection('chats').onSnapshot((snapshot)=>
            setChats(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                }   
                )
            )
            ));
    },[]);

    const addChat=()=>{
        const chatName=prompt('Please enter chat name')
        if(chatName){
            db.collection('chats').add({
                chatName:chatName
            })
        }
        
    }

    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar className="sidebar_avtar" src={user.photo} />
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar_inputButton" onClick={addChat}>
                    <RateReviewOutlined />
                </IconButton>
                <IconButton onClick={()=>auth.signOut()}>
                    < ExitToAppIcon />
                </IconButton>
            </div>

            <div className="sidebar_chats">
                {chats.map(({id,data:{chatName}})=> <SidebarChat key={id} id={id} chatName={chatName}/>)
                    
                }
               
                
                

            </div>
        </div>
    );
}

export default Sidebar;