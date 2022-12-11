import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'servies/api';
// import { CastItem, CastList } from './Cast.styled';
import { CastItem, CastList, Character, Name } from './Cast.styled';



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
      {cast.length > 0
        ? cast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <Name>{name}</Name>
              <Character> Character: {character}</Character>
            </CastItem>
          ))
        : "Sorry, there isn't any info :("}
    </CastList>
       
);
};