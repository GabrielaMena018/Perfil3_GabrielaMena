import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { InfoCard } from '../components/InfoCard';
import { ActionButton } from '../components/ActionButton';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Mi Perfil</Text>
      </View>

      <View style={styles.contentSection}>
        <InfoCard
          label="Nombre Completo"
          value="Gabriela Isabel Castillo Mena"
        />
        <InfoCard
          label="Carnet"
          value="20240153"
        />
        <InfoCard
          label="Sección y Grupo"
          value="2B"
        />
      </View>

      <View style={styles.buttonSection}>
        <ActionButton
          title="Ver Series de TV"
          onPress={() => navigation.navigate('Shows')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerSection: {
    backgroundColor: colors.teal,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  contentSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  buttonSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
