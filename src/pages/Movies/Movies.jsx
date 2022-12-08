// import { button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesdByQuery } from 'servies/api';

import { Movieslist } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [serchParams, setSerchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
    setSerchParams({ query });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  useEffect(() => {
      const query = serchParams.get('query');
      if (!query) {
          return;
      }
    console.log(query);
    getMoviesdByQuery(query).then(setMovies);
  }, [serchParams]);

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movies"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Serch</button>
      </form>
      <Movieslist movies={movies} />
    </div>
  );
};
