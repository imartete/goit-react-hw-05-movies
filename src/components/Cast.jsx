import { fetchCast } from 'utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, List, ListItem } from 'App.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

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
              src={
                castItem.profile_path
                  ? IMG_URL + castItem.profile_path
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
              }
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
