import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBanners } from "../slices/BannerSlice";

export const Banner = () => {
  const { data, isloading, error } = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, []);
  return <div>Banner</div>;
};
