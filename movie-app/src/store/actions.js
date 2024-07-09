
import axios from 'axios';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE
} from './actionTypes';

export const fetchMovies = (query) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });

  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=452b0b7b`);
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: response.data.Search || [],
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIE_DETAILS_REQUEST });

  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=452b0b7b`);
    dispatch({
      type: FETCH_MOVIE_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIE_DETAILS_FAILURE,
      payload: error.message,
    });
  }
};
