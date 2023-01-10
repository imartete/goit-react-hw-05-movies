import { useState } from 'react';
import PropTypes from 'prop-types';

export function SearchBox({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter the name of the movie');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="input" type="text" onInput={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
