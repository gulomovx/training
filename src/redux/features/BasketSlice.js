import { createSlice } from "@reduxjs/toolkit";


const initialState={
      products:[],
      amount:0
}

const basketSlice=createSlice({
      name:'basket',
      initialState
})
