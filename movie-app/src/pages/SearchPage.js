import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/globals.css'


const API_KEY = '452b0b7b';
const baseUrl = 'http://www.omdbapi.com/';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const response = await fetch(`${baseUrl}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
          setError(null);
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (error) {
        setMovies([]);
        setError('Erreur lors de la recherche de films');
      }
    }
  };



  const handleMovieClick = (imdbID) => {
    navigate(`/details/${imdbID}`);
  };

  const handleAddToFavorites = (imdbID) => {
    alert("Connectez-vous pour ajouter en favoris");
  };

  return (
    <div className="hero">
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Entrez le titre du film"
      />
      <button type="submit">
        Rechercher
      </button>
    </form>
  
    {error && <div>{error}</div>}
    
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          <div className="movie-info">
            <h3>{movie.Title} ({movie.Year})</h3>
            <div className="buttons">
              <button onClick={() => handleAddToFavorites(movie.imdbID)}>Ajouter aux favoris</button>
              <button onClick={() => handleMovieClick(movie.imdbID)}>Plus de détails</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  
  );
};

export default SearchPage;
