import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/MovieInterface';

interface Props {
  actor: Cast
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
  return (
    <View style={styles.castItem}>
      { uri && <Image source={{ uri }} style={styles.image} /> }
      <View style={{ marginLeft: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ opacity: 0.5 }}>{actor.character}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  castItem: {
    flexDirection: 'row',
    marginBottom: 4,
    marginLeft: 8,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6
  }
})
