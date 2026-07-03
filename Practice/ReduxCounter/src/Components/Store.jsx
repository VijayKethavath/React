import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Createslice"

const Store = configureStore({
  reducer:{
    counter:countReducer
  }
})
console.log(Store);

export default Store