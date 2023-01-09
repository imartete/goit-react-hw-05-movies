import axios from 'axios';

const api_key = '0fd1ddf45233c721325ad47f082cd332';

function requestWithKey(request) {
  return axios.get(request, {
    params: { api_key },
  });
}

export async function fetchTrending() {
  const response = await requestWithKey(
    'https://api.themoviedb.org/3/trending/movie/day'
  );
  return response;
}

export async function fetchByQuery(query) {
  const response = await requestWithKey(
    'https://api.themoviedb.org/3/search/movie?query=' + query
  );
  return response;
}
