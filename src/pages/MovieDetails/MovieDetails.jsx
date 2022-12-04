import { useParams } from 'react-router-dom';
import { getMovieById } from 'servies/api';
import { useState, useEffect } from 'react';


const baseUrl ='http://image.tmdd.org/t/p/w500/'

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        getMovieById(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) {
        return;
    }
    
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`${baseUrl+ movie.poster.path}`} alt={movie.title} />
            <p>Overview:{movie.overview}</p>
        </div>
    );
};