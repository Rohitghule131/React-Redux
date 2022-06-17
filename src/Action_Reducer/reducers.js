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
        },
        removeCandidate:(state,payload)=>{
            if (state.strength_of_candidate>=1){
                let index = state.candidates.findIndex(elem=>elem.payload.email===payload)
                if(index===undefined){
                    return
                }
                state.candidates.splice(index,1)
                state.strength_of_candidate -= 1
                return 
            }
            else{
                return 
            }
            
        }
    }
})

export const {addCandidates,removeCandidate} = userSlice.actions;

export default userSlice.reducer;