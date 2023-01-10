import { useState, useEffect } from 'react';
import { fetchTrending } from 'utils/api';
import { MovieList } from 'components/MovieList';
import { Loader } from 'components/Loader/Loader';

export function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrending() {
      try {
        setLoading(true);
        const response = await fetchTrending();
        setTrending(response.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getTrending();
  }, []);

  return (
    <main>
      {loading && <Loader />}
      {trending && !loading && <MovieList movies={trending} />}
    </main>
  );
}
