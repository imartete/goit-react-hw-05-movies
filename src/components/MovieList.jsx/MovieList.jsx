import { Link } from 'react-router-dom';

export function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
