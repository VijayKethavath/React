import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/CounterSlice"



export const Store = configureStore({
  reducer:{
    counter:counterReducer
  }
})
console.log(Store);
