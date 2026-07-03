import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
  name:"counter",
  initialState:{count:0},
  reducers:{
    OnIncBtn:(state)=>{
      state.count +=1
    },
    OnDecBtn:(state)=>{
      state.count -=1
    },
    OnResBtn:(state)=>{
      state.count =0
    }
  }
})
export default CounterSlice.reducer
export const {OnIncBtn,OnDecBtn,OnResBtn} = CounterSlice.actions