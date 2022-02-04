import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Cast, MovieDetailsResponse } from '../interfaces/MovieInterface';
import { globalStyles, pallete } from '../theme';
import { CastItem } from './CastItem';

interface Props {
  fullMovie: MovieDetailsResponse,
  voteAverage: number,
  cast: Cast[]
}

export const MovieDetails = ({ cast, fullMovie, voteAverage }: Props) => {
  const formatCurrency = (number: number) => {
    const formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    return formatter.format(number)
  }
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.rating}>
          <Text>★</Text>
          <Text style={{ marginLeft: 4 }}>{voteAverage}</Text>
        </View>
        {
          fullMovie?.genres?.map(genre => (
            <Text key={genre.id} style={{ marginRight: 8 }}>{genre.name}</Text>
          ))
        }
      </View>
      <View>
        <Text style={styles.subtitle}>Overview</Text>
        <Text>{fullMovie.overview}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Budget</Text>
        <Text>{formatCurrency(fullMovie.budget)}</Text>
      </View>
      <View style={{ paddingBottom: 100 }}>
        <Text style={styles.subtitle}>Cast</Text>

        <View>
          <FlatList
            data={cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item} /> }
          />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
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