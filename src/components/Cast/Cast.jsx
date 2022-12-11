import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'servies/api';
import { CastItem, CastList } from './Cast.styled';




export const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();
 

    useEffect(() => {
        getActors(movieId).then(setCast);
    }, [movieId]);

    if (!cast) {
    return;
  }
    


    return (
        <CastList>
            {cast.map(actor => (<CastItem key={actor.id} >{actor.name}</CastItem>))}
        </CastList>
);
};