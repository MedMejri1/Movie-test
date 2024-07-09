import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const DetailPage = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=452b0b7b&i=${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Year:</Text>
        <Text style={styles.info}>{movie.Year}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Rated:</Text>
        <Text style={styles.info}>{movie.Rated}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Released:</Text>
        <Text style={styles.info}>{movie.Released}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Season:</Text>
        <Text style={styles.info}>{movie.Season}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Episode:</Text>
        <Text style={styles.info}>{movie.Episode}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Runtime:</Text>
        <Text style={styles.info}>{movie.Runtime}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Genre:</Text>
        <Text style={styles.info}>{movie.Genre}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Director:</Text>
        <Text style={styles.info}>{movie.Director}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Writer:</Text>
        <Text style={styles.info}>{movie.Writer}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Actors:</Text>
        <Text style={styles.info}>{movie.Actors}</Text>
      </View>
      <Text style={styles.plot}>{movie.Plot}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  info: {
    marginLeft: 5,
    color: '#555',
  },
  plot: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
});

export default DetailPage;
