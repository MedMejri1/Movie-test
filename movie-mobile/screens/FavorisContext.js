import React, { createContext, useState } from 'react';

export const FavorisContext = createContext();

export const FavorisProvider = ({ children }) => {
  const [favoris, setFavoris] = useState([]);

  const addFavori = (movie) => {
    setFavoris((prevFavoris) => [...prevFavoris, movie]);
  };

  const removeFavori = (imdbID) => {
    setFavoris((prevFavoris) => prevFavoris.filter(movie => movie.imdbID !== imdbID));
  };

  return (
    <FavorisContext.Provider value={{ favoris, addFavori, removeFavori }}>
      {children}
    </FavorisContext.Provider>
  );
};
