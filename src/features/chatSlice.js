import {  createSlice } from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';

export const chatSlice = createSlice({
  name: 'chat',
  initialState :{
    chatId: null,
    chatName:null
   
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChat: (state,action) => {
      
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
    
    // Use the PayloadAction type to declare the contents of `action.payload`
   
  },
 
});

export const { setChat} = chatSlice.actions;

export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer;
