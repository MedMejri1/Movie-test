import React from 'react';

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div onClick={() => onSelect(movie.imdbID)}>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieCard;
