import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    candidates : [],
    strength_of_candidate:0
}

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        addCandidates:(state,payload)=>{
            state.candidates.push(payload)
            state.strength_of_candidate += 1
            console.log("in reducer",state.candidates)
            console.log("in reducer",payload)
        }
    }
})

export const {addCandidates} = userSlice.actions;

export default userSlice.reducer;