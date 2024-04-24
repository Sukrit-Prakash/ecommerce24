import React from 'react'
import {configureStore} from"@reduxjs/toolkit";
// import cartSlice from './cartslice';
import cartReducer from './cartslice'
const store=configureStore({
    reducer:{
        // cartState:cartSlice.reducer,
        cartState:cartReducer,
    }
})

export default store
