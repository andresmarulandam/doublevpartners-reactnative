import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Chart from '../components/Chart';

const FollowersChartScreen = ({ route }) => {
  const { users } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Número de Seguidores de los 10 Primeros Usuarios
      </Text>
      <Chart data={users} />
    </View>
  );
};

export default FollowersChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
