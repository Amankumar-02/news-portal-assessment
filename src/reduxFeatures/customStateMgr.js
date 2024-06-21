import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    currentPage: 1,
}

export const customStateSlice = createSlice({
    name: 'customState',
    initialState,
    reducers:{
        setCategory : (state, action)=>{
            state.category = action.payload;
        },
        setCurrentPage : (state, action)=>{
            state.currentPage = action.payload;
        },
    }
})

export const {setCategory, setCurrentPage} = customStateSlice.actions

export default customStateSlice.reducer