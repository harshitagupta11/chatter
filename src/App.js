import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import './App.css';
import Chatter from './Chatter';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';

function App() {
  const user=useSelector(selectUser)

  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        //user is logged in
        console.log(authUser) 
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName

        }))
      }
      else{
        //user is logged out 
        dispatch(logout())
      }
    })
  },[])
  return (
    <div className="App">
      {user ?
       <Chatter/>:
        <Login />
      }
   
    </div>
  );
}

export default App;
