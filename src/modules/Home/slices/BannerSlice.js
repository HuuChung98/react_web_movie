import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as movieAPI from '../../../apis/movies'

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

export const getBanners = createAsyncThunk(
    "home/banner/getbanners",
    // const { data} = await movieAPI.getBanners();
    // return data.content;
    // +++++++++++++++++++++++++
    async (_, { rejectWithValue }) => {
        // try {
        //     const { data} = await movieAPI.getBanners();
        //     return data.content;
        // } catch (error) {
        //     return rejectWithValue(error.response.data.content);
        // }
        return await movieAPI.getBanners();

    },

)

const bannerSlice = createSlice({
    name: 'home/banner',
    initialState,
    extraReducers: {
        [getBanners.pending]: (state) => {
            return {...state, isLoading: true };
        },
        [getBanners.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [getBanners.rejected]: (state, action) => {
            return {...state, error: action.error.message, isLoading: false}
        }
    },
});

export default bannerSlice.reducer;