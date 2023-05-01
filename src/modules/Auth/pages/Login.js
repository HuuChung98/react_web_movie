import React from 'react';
import { useForm } from 'react-hook-form'; // thư viện react-hook-form hỗ trợ phần điền thông tin
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../slices/authSlice';

const Login = () => {
  const { register, handleSubmit, formState: { errors} } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // mode: onTouched: khi gõ vào ô input nếu ko đúng sẽ show message ngày mà ko phải chờ đến lúc submit
    // mode:  'onTouched'
  });

  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(login(values));
  };

  const onError = (values) => {
    console.log(values)
  }

  if(user) {
    // Kiểm tra xem người dùng có phải là admin hay không
    if (user.maLoaiNguoiDung === "QuanTri") {
      return < Navigate to="admin/movies"/>
    }
    // redirect user về trang home 
    return < Navigate to="/"/>
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label htmlFor=""> Tài khoản</label>
          <input
            type="text"
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "tài khoản không được để trống",
              },
              minLength: {
                value: 5,
                message: "tài khoản phải có ít nhất 5 kí tự",
              },
              maxLength: {
                value: 15,
                message: "tài khoản tối đa 15 kí tự",
              },
            })}
          />
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div>
          <label htmlFor=""> Mật khẩu</label>
          <input
            type="password"
            {...register("matKhau", {
              required: {
                value: true,
                message: "mật khẩu không được để trống",
              },
              pattern: {
                value: /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/,
                message: "mật khẩu không đúng định dạng", 
              }
            })}
          />
          {errors.matKhau && <span>{errors.matKhau.message}</span>}
        </div>
        <button className="btn btn-primary" disabled={isLoading}>Đăng nhập</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login