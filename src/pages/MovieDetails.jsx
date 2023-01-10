import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchById } from 'utils/api';
import { Section, GoBack } from 'App.styled';
import { MovieCard } from 'components/MovieCard';

export function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetchById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovie();
  }, [movieId]);

  const backLink = location.state?.from ?? '/movies';

  return (
    <main>
      <GoBack to={backLink}>Go back</GoBack>
      <Section>{movie && <MovieCard movie={movie} />}</Section>
      <Section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </Section>
      <Outlet />
    </main>
  );
}
