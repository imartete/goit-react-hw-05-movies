import { Routes, Route } from 'react-router-dom';
// import { Section } from 'components/Section/Section';
import { Link } from './App.styled';

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
    </>
  );
}
