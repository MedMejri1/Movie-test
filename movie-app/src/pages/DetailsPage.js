import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const DetailsPage = () => {
  const { movieId } = useParams();

  return (
    <div>
      <MovieDetails movieId={movieId} />
    </div>
  );
};

export default DetailsPage;
