import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servies/api';
import {RevievsList, RevievsItem, Author, Content} from './Revievs.styled'


export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      <RevievsList>
        {<p>There is no reviews yet</p> ||
          reviews.map(review => (
            <RevievsItem key={review.id}>
              <Author> Author: {review.author}</Author>
              <Content>{review.content}</Content>
            </RevievsItem>
          ))}
      </RevievsList>
    </div>
  );
};