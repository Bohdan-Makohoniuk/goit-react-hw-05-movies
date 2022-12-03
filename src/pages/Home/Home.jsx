import { getTrendingMovies } from "servies/api";
import {useState, useEffect} from 'react'
import {Movieslist} from 'components/MoviesList/MoviesList'
export const Home = () => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setMovies);
}, []);


    return <div>
        <Movieslist movies={movies}/>{' '}
    </div>;

};