export const Movieslist = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title || movie.name}</li>
      ))}
    </ul>
  );
};
