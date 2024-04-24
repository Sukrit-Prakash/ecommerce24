import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    initialState:[],
    name:'cart',
    reducers:{
       add(state,action){
        //i dont know why we are filtering the product 
        const tempState=state.filter(
            (product)=>product.id === action.payload.id)
            if(tempState.length <1)
            {
               state.push(action.payload) 
            }
              

        //   state.push(action.payload)
       }
    }
})
export const{add}=cartSlice.actions;

export default cartSlice.reducer