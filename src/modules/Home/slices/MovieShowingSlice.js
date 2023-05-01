import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as movieAPI from '../../../apis/movies';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

export const getMoviesShowing = createAsyncThunk(
    "home/movieShowing/getmovieshowing",
    // async () => {
    //     const { data } = await movieAPI.getMoviesShowing();
    //     return data.content;
    // }
    async ( _, { rejectWithValue }) => {
        return await movieAPI.getMoviesShowing();
    },
);

const movieShowingSlice = createSlice({
    name: "home/movieShowing",
    initialState,
    extraReducers: {
        [getMoviesShowing.pending]: (state) => {
            return {...state, isLoading: true};
        },
        [getMoviesShowing.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false};
        },
        [getMoviesShowing.rejected]: (state, action) => {
            return {...state, error: action.error, isLoading: false}
        },
    }
});

export default movieShowingSlice.reducer;