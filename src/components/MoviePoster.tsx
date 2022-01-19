import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/MovieInterface';

interface Props {
  movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  console.log(uri)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
})