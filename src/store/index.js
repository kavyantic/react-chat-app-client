import {configureStore, createSlice} from  '@reduxjs/toolkit'
import chatSlice from './chats'
import cordSlice from './cords'


export default configureStore({
    reducer:{
        chat:chatSlice.reducer,
        cods:cordSlice.reducer
    }
})

export const chatActions = chatSlice.actions
export const cordActions = cordSlice.actions