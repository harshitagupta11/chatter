import {  createSlice } from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';

export const userSlice = createSlice({
  name: 'users',
  initialState :{
    users: null,
   
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
      
      state.users = action.payload;
    },
    logout: (state) => {
      state.users = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
   
  },
 
});

export const { login,logout } = userSlice.actions;

export const selectUser = (state) => state.users.users;
export default userSlice.reducer;
