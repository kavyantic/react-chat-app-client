import { createSlice } from "@reduxjs/toolkit";



const chatSlice = createSlice({
    name:'chats',
    initialState:{
        current:[],
        people:[],
    },
    reducers:{
        loadCurrentChat(state,action){
            
        },
        loadPeople(state,action){
            state.people = action.payload
        },
        clearChat(state){
            state.current = []
        },
        addNewMsg(state,action){
            state.current.push(
                action.payload
            )
        }
    }
    
})


export default chatSlice