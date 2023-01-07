import axios from 'axios';

const api_key = '0fd1ddf45233c721325ad47f082cd332';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';

export async function fetchTrending() {
  const response = await axios.get(TRENDING_URL, {
    params: {
      api_key,
    },
  });
  return response;
}
