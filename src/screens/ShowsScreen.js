import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { colors } from '../theme/colors';
import { Card } from '../components/Card';
import { ActionButton } from '../components/ActionButton';
import { useFetchShows } from '../hooks/useFetchShows';

export const ShowsScreen = ({ navigation }) => {
  const { shows, loading, error } = useFetchShows();

  const renderShow = ({ item }) => (
    <Card
      title={item.name}
      image={item.image?.medium}
      description={
        item.summary
          ? item.summary.replace(/<[^>]*>/g, '')
          : 'No description available'
      }
    />
  );

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={colors.orange} />
        </View>
      )}

      {error && (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      {!loading && !error && (
        <>
          <FlatList
            data={shows}
            renderItem={renderShow}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
            scrollEnabled={true}
          />
          <View style={styles.buttonSection}>
            <ActionButton
              title="Volver"
              onPress={() => navigation.goBack()}
              variant="secondary"
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  errorText: {
    fontSize: 16,
    color: colors.coral,
    textAlign: 'center',
  },
  buttonSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.peach,
  },
});
