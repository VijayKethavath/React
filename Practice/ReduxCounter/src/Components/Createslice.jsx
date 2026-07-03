import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
  name:"counter",
  initialState:{count:0},

  reducers:{
    OnIncBtn:(state)=>{
      state.count +=1;
    },
    OnResBtn:(state)=>{
      state.count =0

    },
    OnDecBtn:(state)=>{
      state.count -=1
    }
  }

})
export default Counterslice.reducer
export const {OnDecBtn,OnIncBtn,OnResBtn} = Counterslice.actions