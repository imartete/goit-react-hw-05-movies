import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'utils/api';
import { MovieList } from 'components/MovieList';
import { SearchBox } from 'components/Searchbox';
import { Loader } from 'components/Loader/Loader';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        if (movieQuery) {
          const response = await fetchByQuery(movieQuery);
          setMovies(response.data.results);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [movieQuery]);

  function getValue(value) {
    if (value.toLowerCase() === movieQuery.toLowerCase()) {
      alert('You have entered the same name of the movie for this search!');
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
  }

  return (
    <main>
      <SearchBox onSubmit={getValue} />
      {loading && <Loader />}
      {movies && !loading && <MovieList movies={movies} />}
      {!movies.length && movieQuery && <p>No results</p>}
    </main>
  );
}
