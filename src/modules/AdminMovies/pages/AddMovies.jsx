import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import Button from "@mui/material";
// data: trailer, ngayKhoichieu, moTa, tenPhim, hinhAnh, Manhom
import { useNavigate } from "react-router-dom";
import { createMovie } from "../slices/movieSlice";


const Addmovies = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tenPhim: "",
      moTa: "",
      trailer: "",
      hinhAnh: "",
      ngayKhoiChieu: "",
    },
  });
  const [previewImage, setPreviewImg] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
    const payload = { ...values, hinhAnh: values.hinhAnh[0] };

    try {
      await dispatch(createMovie(payload)).unwrap();
      // unwrap(): trong redux toolkit hỗ trợ để khi thêm thất bại sẽ show được message
      // Sau khi thêm phim thành công => điều hướng lên MovieList
      navigate("/admin/movies");
    } catch (error) {
      // Show message thêm phim thất bại
      alert("thêm phim thất bại");
    }
  };
  const handleChangeImage = (evt) => {
    // Đối với Input type = file để lấy được file vừa upload :
    // chức năng chỉ lấy 1 file => sử dụng index
    const files = evt.target.files;
    if (!files[0]) {
      return;
    }
    // Nếu có file => set value cho thuộc tính hình ảnh
    setValue("hinhAnh", files);
    // Xử lý show hình ảnh ra
    const fileReader = new FileReader();
    // Encode file image thành string base 64
    fileReader.readAsDataURL(files[0]);
    //Khi hoàn thành sẽ gọi tới onload 
    fileReader.onload = (evtImg) => {
      setPreviewImg(evtImg.target.result);
    };
  };

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.adminMovie);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField type="text" label="Tên phim" {...register("tenPhim")} />
      </div>
      <div>
        <TextField type="text" label="Mô tả" {...register("moTa")} />
      </div>
      <div>
        <TextField type="text" label="Trailer" {...register("trailer")} />
      </div>
      {/* <div>
      <TextField type="file" label="hình ảnh" {...register("hinhAnh")} />
    </div> */}
      <div>
        <Button variant="contained" color="success">
          <label htmlFor="hinhAnh">Hình ảnh</label>
        </Button>
        <div>{previewImage && < img src = {previewImage} alt="previewImage"/>}</div>
        {/* <input type="file" id="hinhAnh" hidden  {...register("hinhAnh")} /> */}
        <input type="file" id="hinhAnh" hidden onChange={handleChangeImage} />
      </div>
      <div>
        <TextField type="date" {...register("ngayKhoiChieu")} />
      </div>
      <Button type="submit" variant="contained" color="primary">
        {" "}
        Thêm phim{" "}
      </Button>
    </form>
  );
};

export default Addmovies;
