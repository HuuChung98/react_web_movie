import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../apis/auth";

const initialState = {
  // user: null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoading: false,
  error: null,
};

export const register = createAsyncThunk(
   "auth/register",   // prefix (tiền tố)
    async (values) => {
        return await authAPI.register(values);
});

export const login = createAsyncThunk(
    "auth/login", 
    async (values) => {
        // Nếu sử dụng return thì sẽ ko giũ trạng thái đăng nhập khi refesh trang web
        // return await authAPI.login(values);

        // bóc tách data để dùng data lưu trữ thông tin đăng nhập trên localStorage nhằm mục đích không cần đăng nhập khi refesh trang web hoặc tắt trang web 
        const { data } = await authAPI.login(values);
        localStorage.setItem('user', JSON.stringify( data ));
        return data;
});

const authSlice = createSlice({
  name: "auth", // key định danh cho slice( phải là duy nhất)
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [login.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, user: action.payload };
    },
    [login.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error };
    },

    [register.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [register.fulfilled]: (state, action) => {
      return { ...state, isLoading: false };
    },

    [register.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error };
    },
  },
});

export default authSlice.reducer;
