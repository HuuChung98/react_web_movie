import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getMoviesShowing } from '../slices/MovieShowingSlice';


const MovieShowing = () => {
  const { data, isLoading, error } = useSelector((state) => state.movieShowing);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useDispatch(() => {
    dispatch(getMoviesShowing());
  }, []);
  return (
    <div>
        {
          data.map((movie) => {
            return (
              <p key={movie.maPhim}>
                {/* <span>{movie.tenPhim}</span>   thay thế thẻ span bằng Component Typography */}
                <Typography variant='body1' component="span">{movie.tenPhim}</Typography>
                <Button variant='contained' 
                    color='secondary'
                    onClick={() => navigate(`movies/${movie.maPhim}`)}> Detail </Button>
              </p>
            );
          })
        }
    </div>
  )
}

export default MovieShowing