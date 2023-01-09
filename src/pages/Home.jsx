import { useState, useEffect } from 'react';
import { fetchTrending } from 'utils/api';
import { MovieList } from 'components/MovieList';

export function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getTrending() {
      try {
        const response = await fetchTrending();
        setTrending(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getTrending();
  }, []);

  return (
    <main>
      <MovieList movies={trending} />
    </main>
  );
}
