// setup cấu hình api mặc định để sử dụng
import axios from "axios";
import store from "../stores"

const axiosClient = axios.create({
  // Đoạn đầu của 1 API mặc định
  baseURL: "link mặc định", // URL được cấp bởi trung tâm
  // setup header có token bảo mật
  headers: {
    TokenSecurity: "add later", // sẽ thêm TokenSecurity khi có được từ Cybersoft
  },
});
// Sử dụng kĩ thuật request Intercepter

axiosClient.interceptors.request.use(
  (config) => {
    // Thay đổi config request trước khi gửi lên server
    // Kết nối tới redux store lấy thông tin đăng nhâp users
    const { user } = store.getState().auth;
    // Lấy key accessToken từ user và gán cho Authorization của request header 
    const { accessToken } = user;
    config.headers.Authorization = `Bearer  ${accessToken}`;   

    return config;
  }
);

// sử dụng kĩ thuật interceptor của thư viện axios ==> response Intecepter
axiosClient.interceptors.response.use(
  (reponse) => {
    // thành công
    return reponse.data.content;
  },
  // thất bại
  (error) => {
    // format error trước khi trả content cho nới gọi response
    return Promise.reject(error.response.data.content);
  }
);

export default axiosClient;
