import { Loader } from 'components/Loader/Loader';
import { MovieList, MovieLink } from '../Home/Home.styled';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';

import { getMoviesdByQuery } from 'servies/api';

  const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    getMoviesdByQuery(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'There is no movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>There is no movies with this request. Please, try again</p>}
      <MovieList>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieLink>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
};

export default Movies;

//  const location = useLocation();
//   // const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('movieName') ?? '';
//   // const [moviesList, setMoviesList] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);   






//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [serchParams, setSerchParams] = useSearchParams();

//   const handleChange = e => {
//     setQuery(e.target.value);
//     // setSerchParams({ query });
//   };
//   const handleSubmit = e => {
//     setSerchParams({ query });
//     e.preventDefault();
//   };
//   useEffect(() => {
//       const query = serchParams.get('query');
//       if (!query) {
//           return;
//       }
//     getMoviesdByQuery(query).then(setMovies);
//   }, [serchParams]);

//   return (
//     <main>
//       <SearchBar onSubmit={handleSubmit} />
//       {error && <p>There is no movies with this request. Please, try again</p>}
//       <MovieList>
//         {moviesList.map(movie => {
//           return (
//             <li key={movie.id}>
//               <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
//                 {movie.original_title || movie.name}
//               </MovieLink>
//             </li>
//           );
//         })}
//         {isLoading && <Loader />}
//       </MovieList>
//     </main>
//   );
// };
// export default Movies;