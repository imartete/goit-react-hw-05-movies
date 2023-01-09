import { Outlet } from 'react-router-dom';
import { Link, Container, Section } from 'App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Section>
        <header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </header>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </Container>
  );
};
