import { Routes, Route } from 'react-router-dom';
// import { Section } from 'components/Section/Section';
import { Link } from './App.styled';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';

export function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {/* TODO  Change element accordingly !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <Route path="cast" element={<MovieDetails />} />
            <Route path="rewievs" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
