import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DEFAULT_POSTER_HEIGHT, DEFAULT_POSTER_WIDTH } from '../constants';
import { Movie } from '../interfaces/MovieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props {
  movie: Movie,
  width?: number,
  height?: number
}

export const MoviePoster = ({
  movie,
  width = DEFAULT_POSTER_WIDTH,
  height = DEFAULT_POSTER_HEIGHT
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', movie)}
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
    </TouchableOpacity>
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