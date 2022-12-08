import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "servies/api";


export const Cast = () => {
    const [cast, setCast] = useState([]);
    const [movieId] = useParams();

    useEffect(() => {
        getActors(movieId).then(setCast);
    }, [movieId]);

    if (!cast) {
    return;
  }
    


    return (<div>
        <ul>
            {cast.map(actor => (<li key={actor.id} >{actor.name}</li>))}
        </ul>
    </div>);
};