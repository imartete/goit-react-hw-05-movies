import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
`;

export const Section = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100%;
  font-size: 18px;
`;
