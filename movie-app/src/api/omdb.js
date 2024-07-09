import axios from 'axios';

const API_KEY = '452b0b7b';

export const searchMovies = (query) => {
  return axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
};

export const getMovieDetails = (id) => {
  return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
};

const baseUrl = 'http://www.omdbapi.com/';

const searchMovieByName = async (movieName) => {
  try {
    const response = await fetch(`${baseUrl}?s=${encodeURIComponent(movieName)}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.Response === 'True') {
      return data.Search; 
    } else {
      throw new Error(data.Error); 
    }
  } catch (error) {
    console.error('Erreur lors de la recherche de film:', error);
    return [];
  }
};
searchMovieByName('Inception').then(movies => console.log(movies));
