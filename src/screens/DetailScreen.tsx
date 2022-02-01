import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { globalStyles, pallete } from '../theme';
import { useMovieDetails } from '../hooks/useMovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

const { height: screenHeight } = Dimensions.get('screen')

export const DetailScreen = ({ route }: Props) => {
  let movie = route.params
  const { fullMovie, cast, isLoading } = useMovieDetails(movie.id)
  let uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={[styles.posterImage, globalStyles.posterShadow]}
        />
      </View>
       <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.rating}>
            <Text>★</Text>
            <Text style={{ marginLeft: 4 }}>{movie.vote_average}</Text>
          </View>
          {
            fullMovie?.genres?.map(genre => (
              <Text key={genre.id} style={{ marginRight: 8 }}>{genre.name}</Text>
            ))
          }
        </View>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  imageContainer: {
    height: screenHeight * 0.7,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25
  },
  posterImage: {
    flex: 1
  },
  detailsContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  rating: {
    flexDirection: 'row',
    marginRight: 8,
    padding: 4,
    borderRadius: 4,
    backgroundColor: pallete.lightGray
  }
})