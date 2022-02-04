import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

import { globalStyles } from '../theme';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

const { height: screenHeight } = Dimensions.get('screen')

export const DetailScreen = ({ route, navigation }: Props) => {
  let movie = route.params
  const { fullMovie, cast, isLoading } = useMovieDetails(movie.id)
  let uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={[styles.posterImage, globalStyles.posterShadow]}
        />
      </View>
       <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
          { isLoading
            ? <Text>Loading...</Text>
            : <MovieDetails
                cast={cast.cast}
                fullMovie={fullMovie}
                voteAverage={movie.vote_average}
              />
          }
        </View>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
          <Ionicons name='arrow-back-outline' size={40} color='white' />
      </TouchableOpacity>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 54, 61, 0.3)',
    top: 50,
    left: 20,
    borderRadius: 25
  },
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
  }
})