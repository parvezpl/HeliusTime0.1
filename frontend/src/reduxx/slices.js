import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    loginStatus:false,

}

const accountState = createSlice({
    name: 'account',
    initialState,
    reducers:{
        loginFunc: (state, action)=>{
            state.loginStatus=action.payload
            console.log(state.loginStatus)
        }
    }
})

export const {loginFunc} = accountState.actions

export default accountState.reducer