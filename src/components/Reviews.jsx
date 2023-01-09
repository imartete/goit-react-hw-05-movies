import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/api';
import { Section } from 'App.styled';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetchReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <Section>
      <h3>Reviews</h3>
      {reviews.length ? (
        <ul>
          {reviews.map(reviewsItem => (
            <li key={reviewsItem.id}>
              <p>Author: {reviewsItem.author}</p>
              <p>{reviewsItem.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Unfortunately we don not have reviews for this movie</p>
      )}
    </Section>
  );
}
