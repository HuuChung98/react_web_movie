// Định nghĩa các function gọi API liên quan đến movies
import axiosClient from "./axiosClient";
export const getMovies = () => {
  return axiosClient.get("Quanlyphim/laydansachphim", {
    params: {
      maNhom: "GP01",
    },
  });
};

export const getMoviesDetail = () => {
  return axiosClient.get("Quanlyphim/laythongtinphim", {
    params: {
      maNhom: "GP02",
    },
  });
};

export const getBanners = () => {
  return axiosClient.get("Quanlyphim/laydanhsachbanner");
};

export const getMoviesShowing = () => {
  return axiosClient.get("Quanlyphim/getMovieShowing");
};

// export const deleteMovie = () => {
//     return axiosClient.get("Quanlyphim/xoaPhim",
//         {
//             header: {
//                 Authorazation: "",
//             }
//         }
//     );

// };

export const deleteMovie = (movieId) => {
  return axiosClient.get("Quanlyphim/xoaPhim", {
    header: {
      Authorazation: "",
    },
  });
};

// Phần thêm phim rất quan trọng, cần lưu ý thật kĩ

export const createMovie = (movie) => {
  console.log("object movie", movie);
//   {#########################################################################}
  // chứ ý: Khi thêm hoặc cập nhật dữ liệu có giá trị đặt biệt như file,
  // Ta cần dùng đối tượng FormData đê làm việc với những dữ liệu này
  const formData = new FormData();
  for (let key in movie) {
    formData.append(key, movie[key]);
  }
  formData.append("maNhom", "GP01");
  // return axiosClient.post("Quanlyphim/themPhimUploadHinh", movie);
  return axiosClient.post("Quanlyphim/themPhimUploadHinh", formData);
//   {#########################################################################}
// 
};
