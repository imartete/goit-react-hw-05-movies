import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchById } from 'utils/api';
import { Section, GoBack, CardMeta } from 'App.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieDetails() {
  const [movie, setMovie] = useState({});
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
      <Section>
        <CardMeta>
          <img
            alt={movie.tagline ? movie.tagline : 'movie poster image'}
            src={
              movie.poster_path
                ? IMG_URL + movie.poster_path
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
            }
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
            <p>Overview</p>
            <span>
              {movie.overview
                ? movie.overview
                : 'Unfortunately there is no overview'}
            </span>
            <p>Genres</p>
            <span>{movie?.genres?.map(genre => genre.name).join(', ')}</span>
          </div>
        </CardMeta>
      </Section>
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
