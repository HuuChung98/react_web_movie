import { configureStore } from "@reduxjs/toolkit";
import BannerSlice from "./modules/Home/slices/BannerSlice";
import MovieShowingSlice from "./modules/Home/slices/MovieShowingSlice";
import authSlice from "./modules/Auth/slices/authSlice";
import movieSlice from "./modules/AdminMovies/slices/movieSlice"

const store = configureStore(
    {
        reducer: {
            banner: BannerSlice,
            movieShowing: MovieShowingSlice,
            auth: authSlice,
            adminMovie: movieSlice, 
        },
    }
);

export default store;   