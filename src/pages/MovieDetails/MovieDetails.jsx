import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'servies/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
    const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { movieID } = useParams();
  // console.log(MovieDetails);
  const [movie, setMovie] = useState(null);
  // console.log(movie);
  useEffect(() => {
    getMovieById(movieID).then(setMovie);
  }, [movieID]);
    
    
    const handleGoBack = () => {
        navigate(location.state.from);
    }

  if (!movie) {
    return;
  }

  return (
    <>
      <button type ='button' onClick={handleGoBack} >Go back</button>
      <div>
        <h2>{movie.title}</h2>
        <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <p>Overview:{movie.overview}</p>
          </div>
          <Link to='/cast' >Cast</Link>
          <Link to='/reviews' >Reviews</Link>
          <Outlet/>
    </>
  );
};