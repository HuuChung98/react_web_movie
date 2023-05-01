import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';



const MovieDetails = () => {

  const { movieId } = useParams();
  useEffect(() => {
    // dùng movieId để dispatch action lấy chi tiết phim
    // dispatchEvent(getMovieDetail(movieId));
  },[])

  return (
    <div>

    </div>
  )
}

export default MovieDetails