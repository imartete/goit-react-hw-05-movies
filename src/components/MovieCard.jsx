import { CardMeta } from 'App.styled';

export function MovieCard({ movie }) {
  const { tagline, title, overview, vote_average, genres, poster_path } = movie;
  return (
    <CardMeta>
      <img alt={tagline} src={poster_path} />
      <div>
        <h1>{title}</h1>
        <p>User Score: {vote_average}%</p>
        <p>Overview</p>
        <span>{overview}</span>
        <p>Genres</p>
        <span>{genres}</span>
      </div>
    </CardMeta>
  );
}
