import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { DEFAULT_POSTER_HEIGHT, DEFAULT_POSTER_WIDTH } from '../constants';

import { Movie } from '../interfaces/MovieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
  data: Movie[]
  itemWidth?: number,
  itemHeight?: number
}

export const Slider: FC<Props> = ({
  data,
  itemWidth = DEFAULT_POSTER_WIDTH,
  itemHeight = DEFAULT_POSTER_HEIGHT
}) => {

  return (
    <View>
      <FlatList
        style={{ paddingBottom: 30, paddingTop: 30 }}
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
