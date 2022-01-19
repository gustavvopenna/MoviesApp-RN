import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import movieDB from '../api/movieDB';
import { useMovies } from '../hooks/useMovies';
import { MovieDBNowPlaying } from '../interfaces/MovieInterface';

export const HomeScreen = () => {
  const { isLoading, nowPlayingMovies } = useMovies()

  if(isLoading) {
    return (
      <View>
        <ActivityIndicator size={50} />
      </View>
    )
  }
  
  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies</Text>
      <View>
        {
          nowPlayingMovies.map(movie => (
            <Text key={movie.id}>{movie.title}</Text>
          ))
        }
      </View>
    </View>
  )
};
