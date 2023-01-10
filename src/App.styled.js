import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
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

export const GoBack = styled(Link)`
  display: block;
  width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: grey;
`;

export const CardMeta = styled.div`
  display: flex;
  gap: 30px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  width: 210px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
