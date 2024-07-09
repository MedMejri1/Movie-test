import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FavorisContext } from './FavorisContext';

const FavorisPage = ({ navigation }) => {
  const { favoris, removeFavori } = useContext(FavorisContext);

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Aucun film dans les favoris pour le moment.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {favoris.length === 0 ? (
        renderEmptyComponent() 
      ) : (
        <FlatList
          data={favoris}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => (
            <View style={styles.movieCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { movieId: item.imdbID })}>
                <Image source={{ uri: item.Poster }} style={styles.poster} />
                <Text style={styles.title}>{item.Title} ({item.Year})</Text>
              </TouchableOpacity>
              <Button title="Retirer des favoris" onPress={() => removeFavori(item.imdbID)} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
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
  
});

export default FavorisPage;
