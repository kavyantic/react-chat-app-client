import {configureStore, createSlice} from  '@reduxjs/toolkit'
import chatSlice from './chats'


export default configureStore({
    reducer:{
        chat:chatSlice.actions
    }
})

export const chatActions = chatSlice.actions