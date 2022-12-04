import { useParams } from 'react-router-dom';
import { getMovieById } from 'servies/api';
import { useState, useEffect } from 'react';


const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
    const { movieID } = useParams();
    // console.log(MovieDetails);
    const [movie, setMovie] = useState(null);
    // console.log(movie);
    useEffect(() => {
        getMovieById(movieID).then(setMovie);
    }, [movieID]);

    if (!movie) {
        return;
    }
    
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
            <p>Overview:{movie.overview}</p>
        </div>
    );
};