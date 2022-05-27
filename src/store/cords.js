import { createSlice } from "@reduxjs/toolkit";


const cordSlice = createSlice({
    name:'cords',
    initialState:{
       lat:0,
       lng:0
    },
    reducers:{
        setCords(state,action){
            state = action.payload
        }
    }
    
})


export default cordSlice