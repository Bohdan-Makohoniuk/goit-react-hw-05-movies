import { getTrendingMovies } from "servies/api";
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieLink, MovieList, Title } from './Home.styled';

const Home = () => {


    const [movies, setMovies] = useState([]);
    const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getTrendingMovies().then(setMovies);
        setIsLoading(false);
}, []);


    return (
        <main>
            <Title>Top Movies for today</Title>
            <MovieList>
                {movies.map(movies => (
                    <li key={movies.id}>
                        <MovieLink to={`/movies/${movies.id}`} state={{ from: location }}>
                            {movies.original_title || movies.name}
                        </MovieLink>
                    </li>
                ))}
                {isLoading && <Loader />}
            </MovieList>
        </main>
    );

};
export default Home;

