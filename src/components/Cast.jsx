import { fetchCast, getSrc } from 'utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, List, ListItem } from 'App.styled';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const response = await fetchCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <Section>
      <h3>Cast</h3>
      <List>
        {cast.map(castItem => (
          <ListItem key={castItem.id}>
            <img
              src={getSrc(castItem.profile_path)}
              alt={castItem.name}
              width={'180px'}
            ></img>
            <p>{castItem.name}</p>
            <p>Character: {castItem.character}</p>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
