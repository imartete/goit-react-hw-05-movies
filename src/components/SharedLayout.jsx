import { Outlet } from 'react-router-dom';
import { HeaderLink, Container, Section } from 'App.styled';

export function SharedLayout() {
  return (
    <Container>
      <Section>
        <header>
          <nav>
            <HeaderLink to="/" end>
              Home
            </HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </nav>
        </header>
      </Section>
      <Outlet />
    </Container>
  );
}
