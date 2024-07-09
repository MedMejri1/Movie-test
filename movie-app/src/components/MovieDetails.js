import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import '../styles/globals.css'

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=452b0b7b`);
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
  
    
    <div className="movie-details-card">
       
      
      <div className="movie-details-img">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-details-info">
        <h1>{movie.Title}</h1>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Rated:</strong> {movie.Rated}</p>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Season:</strong> {movie.Season}</p>
        <p><strong>Episode:</strong> {movie.Episode}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Writer:</strong> {movie.Writer}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
      </div>
   
    </div>
   
  );
};

export default MovieDetails;
