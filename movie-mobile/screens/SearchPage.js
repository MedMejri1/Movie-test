import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { FavorisContext } from './FavorisContext';
import { useNavigation } from '@react-navigation/native';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const { addFavori, favoris } = useContext(FavorisContext); 
  const navigation = useNavigation();
  const isMovieFavorited = (movieId) => favoris.some((fav) => fav.imdbID === movieId);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=452b0b7b&s=${query}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavorites = (item) => {
    addFavori(item);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Entrez le titre du film"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={searchMovies}>
        <Text style={styles.buttonText}>Rechercher</Text>
      </TouchableOpacity>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { movieId: item.imdbID })}>
              <Image source={{ uri: item.Poster }} style={styles.poster} />
              <Text style={styles.title}>{item.Title} ({item.Year})</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.addToFavorisButton, isMovieFavorited(item.imdbID) && styles.addToFavorisButtonDisabled]}
              onPress={() => addToFavorites(item)}
              disabled={isMovieFavorited(item.imdbID)}
            >
              <Text style={styles.addToFavorisButtonText}>
                {isMovieFavorited(item.imdbID) ? 'Déjà ajouté' : 'Ajouter aux favoris'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  movieCard: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  poster: {
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  addToFavorisButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  addToFavorisButtonDisabled: {
    backgroundColor: 'gray', 
  },
  addToFavorisButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SearchPage;
