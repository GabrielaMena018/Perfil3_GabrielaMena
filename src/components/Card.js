import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const Card = ({ title, image, description }) => {
  return (
    <View style={styles.card}>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {description || 'No description available'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: colors.peach,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.teal,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});
