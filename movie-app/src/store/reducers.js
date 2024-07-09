
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIE_DETAILS_REQUEST,
    FETCH_MOVIE_DETAILS_SUCCESS,
    FETCH_MOVIE_DETAILS_FAILURE
  } from './actionTypes';
  
  const initialState = {
    loading: false,
    movies: [],
    movieDetails: null,
    error: '',
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: '',
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          movies: action.payload,
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case FETCH_MOVIE_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          movieDetails: null,
          error: '',
        };
      case FETCH_MOVIE_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          movieDetails: action.payload,
        };
      case FETCH_MOVIE_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  