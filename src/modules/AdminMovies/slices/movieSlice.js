import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as movieAPI from "../../../apis/movies"

const initialState = {
    movies: [],
    isLoading: false,
    error: null,
};

export const createMovie = createAsyncThunk(
    "admin/movies/createMovie", // đường dẫn này sẽ hiển thị trên devtool,
    async (movie) => { await movieAPI.createMovie(movie);
        return null;
    }
    
);

const movieSlice = createSlice({
    name: "admin/movies",
    initialState,
    extraReducers: {}, // pending, fullfill, reject : sẽ viết sau
});

export default movieSlice.reducer;