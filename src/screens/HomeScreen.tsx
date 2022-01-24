import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { globalStyles } from '../theme';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Slider } from '../components/Slider';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { isLoading, nowPlayingMovies } = useMovies()
  let { top } = useSafeAreaInsets()

  if(isLoading) {
    return (
      <View>
        <ActivityIndicator size={50} />
      </View>
    )
  }
  
  return (
    <View style={{ marginTop: top + 20, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={globalStyles.title}>Movies</Text>
      <ScrollView>
        <View>
          <View>
            <Carousel
              data={nowPlayingMovies}
              sliderWidth={windowWidth}
              itemWidth={300}
              renderItem={({ item }) => (
                <MoviePoster movie={item} />
              )}
            />
          </View>
          <Slider
            data={nowPlayingMovies}
            itemWidth={100}
            itemHeight={160}
          />
        </View>
      </ScrollView>
    </View>
  )
};
