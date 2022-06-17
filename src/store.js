import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./Action_Reducer/reducers"

const store = configureStore({
    reducer:{
        User:UserReducer
    }
})

export default store;