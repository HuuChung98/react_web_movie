import React from 'react';
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

// Component này dùng để kiểm tra xem users đăng nhập vào Admin có hợp lệ hay không?
// Nếu là admin mới cho đăng nhập vào trang     
const AdminRoute = ({children}) => {
    // Thực hiện logic kiểm tra 

    // B1: Kết nối tới redux store lấy thông tin user đang đăng nhập
    const { user } = useSelector((state) => state.auth);

    // B2: Kiểm tra xem user có phải là admin hay không(Bước này sẽ sử dụng khi có API thực tế từ trung tâm)
    // if(!user || user.maLoaiNguoiDung !== "QuanTri") {
    //     // chưa đăng nhập hoặc user không phải là ADMIN
    //     // ==> Redirect về trang not found 
    //     return < Navigate to="/not-found"/>
    // }
    return children;
}

export default AdminRoute;