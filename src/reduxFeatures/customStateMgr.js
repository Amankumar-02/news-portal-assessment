import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    currentPage: 1,
    newsInfoData: [],
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
        setNewsInfoData : (state, action)=>{
            state.newsInfoData = action.payload;
        },
    }
})

export const {setCategory, setCurrentPage, setNewsInfoData} = customStateSlice.actions

export default customStateSlice.reducer