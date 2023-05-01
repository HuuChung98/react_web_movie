import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register as registerAction } from '../slices/authSlice';
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = yup.object({
  taiKhoan: yup
    .string()
    .required("tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .matches(/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/, "Mật khẩu khống đúng định dạng"),
  email: yup
  .string()
  .required("email không được để trông")
  .email("email không đúng định dạng"),
  hoTen: yup
    .string()
    .required("Tên không được để trông"),
  soDt: yup
    .string()
    .required("Số điện thoại không được để trống")

})

const Register = () => {
  const { register, control, handleSubmit, formState: {errors} } = useForm(
  {
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  }
    
  );
  const dispatch = useDispatch();
  // const { user, isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();


  const onSubmit = (values) => {
    console.log(values);
    dispatch(registerAction(values)).then(() => {
      // Sau khi xử lý asyn action thành công
      // Điều hướng về trang đăng nhập( Log in )
        navigate("/login");
    });
  }

  return (
    <div>
      <h1>Register</h1>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* <label htmlFor=""> Tài khoản </label>
            <input type="text" {...register("taiKhoan")}/>
            {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>} */}

            {/* Nếu UI component không hỗ trợ thuộc tính ref  thì không thể register */}
            <TextField
              {...register("taiKhoan")}
              label="Tài khoản"
              error={!!errors.taiKhoan}
              helperText={errors.taiKhoan?.message}
            />
            {/* Để sử dụng hook-form với những UI lib không hỗ trợ ref, ta cần dùng component Controller */}
            {/* <Controller
              name='taiKhoan'
              control={control}
              render={({field, fieldState}) => {
                console.log(field, fieldState);
                return (
                  < TextField 
                  {...field}  
                 //  {...field} ==> có thể thay thế cho các khai báo ở dưới
                 // name={field.name}
                 // value={field.value}
                 // onChange={field.onChange}
                 // onBlur={field.onBlur}  
                 error =  {fieldState.error}
                 helperText={fieldState.errors?.message}
                />
                )

              }}
            /> */}
          </div>
          <div>
            {/* <label htmlFor=""> Mật khẩu </label>
            <input type="password" {...register("matKhau")} />
            {errors.matKhau && <span>{errors.matKhau.message}</span>} */}

            <TextField
              {...register("matKhau")}
              type= "password"
              label="Tài khoản"
              error={!!errors.matKhau}
              helperText={errors.matKhau?.message}
            />
          </div>
          <div>
            <label htmlFor=""> Email </label>
            <input type="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor=""> Họ tên</label>
            <input type="text" {...register("hoTen")} />
            {errors.hoTen && <span>{errors.hoTen.message}</span>}
          </div>
          <div>
            <label htmlFor=""> Phone no. </label>
            <input type="number" {...register("soDt")} />
            {errors.soDt && <span>{errors.soDt.message}</span>}
          </div>
          <button className="btn btn-success">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register