import { createSlice } from "@reduxjs/toolkit";

const initialState={
    OpenModal:false,
}

const SliceModal=createSlice({
    name:"modal",
    initialState,
    reducers:{
        open:(state)=>{
            state.OpenModal=true;
        },
        close:(state)=>{
            state.OpenModal=false;
        },
    }
    
}) 

export const {open,close}=SliceModal.actions;
export default SliceModal.reducer;