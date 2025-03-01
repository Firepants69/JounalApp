import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice(
    {
        name:'auth',
        initialState:{
            status:'not-authenticated',
            uid:null,
            email:null,
            displayName:null,
            photoURL:null,
            errorMessage:null,
        },
        reducers:{
            login:()=>{

            },
            logout:(state,payload)=>{

            },
            checkingCredentials:(state)=>{
                state.status = 'checking';
            }
        }});


export const {login,logout,checkingCredentials} = authSlice.actions;