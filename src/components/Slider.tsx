import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { DEFAULT_POSTER_HEIGHT, DEFAULT_POSTER_WIDTH } from '../constants';

import { Movie } from '../interfaces/MovieInterface';
import { globalStyles } from '../theme';
import { MoviePoster } from './MoviePoster';

interface Props {
  data: Movie[]
  title?: string,
  itemWidth?: number,
  itemHeight?: number
}

export const Slider: FC<Props> = ({
  data,
  title,
  itemWidth = DEFAULT_POSTER_WIDTH,
  itemHeight = DEFAULT_POSTER_HEIGHT
}) => {

  return (
    <View>
      {
        title && <Text style={globalStyles.carouselTitle}>{title}</Text>
      }
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={itemWidth} height={itemHeight} />
        )}
      />
    </View>
  )
};
