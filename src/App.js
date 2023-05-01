import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Truy cập trực tiếp thì các component sẽ luôn luôn được tải ở lần đầu tiên khi truy cập từ trang web

// import Home from "./modules/Home/pages/Home";
// import Login from "./modules/Auth/pages/Login";
// import Register from "./modules/Auth/pages/Register";
// import MovieDetails from "./modules/Movie/pages/MovieDetails";

// import AddMovies from "./modules/AdminMovies/pages/AddMovies";
// import MoviesList from "./modules/AdminMovies/pages/MoviesList";
// import UpdateMovies from "./modules/AdminMovies/pages/UpdateMovies";

import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import AdminRoute from "./routes/AdminRoute";

// Đặc điểm hàm lazy: Dynamic import
const Home = lazy(() => import("./modules/Home/pages/Home"));
const Login = lazy(() => import("./modules/Auth/pages/Login"));
const Register = lazy(() => import("./modules/Auth/pages/Register"));
const MovieDetails = lazy(() => import("./modules/Movie/pages/MovieDetails"));
const AddMovies = lazy(() => import("./modules/AdminMovies/pages/AddMovies"));
const MoviesList = lazy(() => import("./modules/AdminMovies/pages/MoviesList"));
const UpdateMovies = lazy(() =>
  import("./modules/AdminMovies/pages/UpdateMovies")
);

function App() {
  return (
    // Suspense: trong lúc các Component khác đang loading thì trang sẽ hiển thị Loading...  
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {/* Users */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="./movies/:movieId" element={<MovieDetails />} />
        </Route>

        {/* Admin right */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="movies" element={<MoviesList />} />
          <Route path="add" element={<AddMovies />} />
          <Route path="movies/update/:movieId" element={<UpdateMovies />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* < Route path="*" element={<div>Not Found</div>}/> */}
      </Routes>
    </Suspense>
  );
}

export default App;
