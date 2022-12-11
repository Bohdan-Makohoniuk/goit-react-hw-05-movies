import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Title, MovieList, GalleryItem } from 'pages/Home/Home.styled';


export const Movieslist = ({ movies }) => {
  const locatin = useLocation();
  return (
    <MovieList>
      {movies.map(movie => (
          <GalleryItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: locatin }} >
            <Title>{movie.title || movie.name}</Title>
          </Link>
        </GalleryItem>
      ))}
    </MovieList>
  );
};
