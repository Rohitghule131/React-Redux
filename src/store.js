import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import UserReducer from "./Action_Reducer/reducers"

const store = configureStore({
    reducer:{
        User:UserReducer
    }
})

export default store;