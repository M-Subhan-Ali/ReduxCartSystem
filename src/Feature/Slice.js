import { createSlice } from "@reduxjs/toolkit";
import { DataAll } from "../Components/Data/Data";

const initialState={
    product: DataAll,
    amount:0,
    total:0,
}

const slices1=createSlice({
    name:"slice1",
    initialState,
    reducers:{
        ClearAll:(state)=>{
            state.product=[];
        },
        Remove:(state,action)=>{
            const fromDispatchID=action.payload;
            // console.log(fromDispatchID)
         state.product=state.product.filter((item)=>(item.id!==fromDispatchID))
        },
        Increase:(state,action)=>{
            const fromDispatchID=action.payload;
            const product=state.product.find((item)=>item.id===fromDispatchID);
            product.amount+=1;
        },
        Decrease:(state,action)=>{
            const decrease=action.payload;
            const product=state.product.find((item)=>item.id===decrease);
            product.amount-=1;
        },
        Calculation:(state,action)=>{
            let amount=0;
            let total=0;
            state.product.forEach((item)=>{
                amount+=item.amount;
                total+=item.price*item.amount;
            })
            state.amount=amount;
            state.total=total
        }
    }
    
})

export const {ClearAll,Remove,Increase,Decrease,Calculation}=slices1.actions

export const{detailProduct}=slices1.actions;

export default slices1.reducer;