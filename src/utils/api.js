import axios from 'axios';

const api_key = '0fd1ddf45233c721325ad47f082cd332';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function getAlt(alt) {
  return alt ? alt : 'movie poster';
}

export function getSrc(src) {
  return src
    ? IMG_URL + src
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019';
}

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

export async function fetchById(id) {
  const { data } = await requestWithKey(
    'https://api.themoviedb.org/3/movie/' + id
  );
  return {
    ...data,
    poster_path: getSrc(data.poster_path),
    tagline: getAlt(data.tagline),
    genres: data.genres.map(genre => genre.name).join(', '),
    vote_average: (data.vote_average * 10).toFixed(0),
  };
}

export async function fetchCast(id) {
  const response = await requestWithKey(
    `https://api.themoviedb.org/3/movie/${id}/credits`
  );
  return response.data.cast;
}

export async function fetchReviews(id) {
  const response = await requestWithKey(
    `https://api.themoviedb.org/3/movie/${id}/reviews`
  );
  return response.data.results;
}
