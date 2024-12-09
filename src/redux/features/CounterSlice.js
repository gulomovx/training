import { createSlice } from "@reduxjs/toolkit";

const initialState={
      count:2
}

const counterSlice=createSlice({
      name:'counter',
      initialState,
      reducers:{
            increment:(state)=>{
                  state.count+=1
            },
            decrement:(state)=>{
                  state.count-=1
            },
            manual:(state, action)=>{
                  state.count+=action.payload
            }
      }
})

export const {increment, decrement, manual}=counterSlice.actions

export default counterSlice.reducer

