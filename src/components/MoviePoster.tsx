import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DEFAULT_POSTER_HEIGHT, DEFAULT_POSTER_WIDTH } from '../constants';
import { Movie } from '../interfaces/MovieInterface';

interface Props {
  movie: Movie,
  width?: number,
  height?: number
}

export const MoviePoster: FC<Props> = ({
  movie,
  width = DEFAULT_POSTER_WIDTH,
  height = DEFAULT_POSTER_HEIGHT
}) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  console.log(uri)

  return (
    <View
      style={{
        ...styles.container,
        width,
        height
      }}
    >
      <Image
        source={{ uri }}
        style={styles.image}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 50,
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