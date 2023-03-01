import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}


export const counter = createSlice({
    initialState: initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.count +=1;
        },
        decrement: (state) => {
            state.count -=1;
        },
    }
});


export const {increment, decrement} = counter.actions;

export default counter.reducer;
