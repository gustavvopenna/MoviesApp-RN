import React from 'react';
import { ActivityIndicator, Dimensions, Text, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MoviePoster } from '../components/MoviePoster';
import { Slider } from '../components/Slider';

import { useMovies } from '../hooks/useMovies';
import { globalStyles } from '../theme';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
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
              data={nowPlaying}
              sliderWidth={windowWidth}
              itemWidth={300}
              renderItem={({ item }) => (
                <MoviePoster movie={item} />
              )}
            />
          </View>
          <Slider
            title='Popular'
            data={popular}
            itemWidth={100}
            itemHeight={160}
          />
          <Slider
            title='Top rated'
            data={topRated}
            itemWidth={100}
            itemHeight={160}
          />
          <Slider
            title='Upcoming'
            data={upcoming}
            itemWidth={100}
            itemHeight={160}
          />
        </View>
      </ScrollView>
    </View>
  )
};
