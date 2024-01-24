import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Chart from '../components/Chart';

const FollowersChartScreen = ({ route }) => {
  const { users } = route.params;
  return (
    <ImageBackground
      source={require('../assets/pexels3.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            Número de Seguidores de los 10 Primeros Usuarios
          </Text>
        </View>

        <Chart data={users} />
      </View>
    </ImageBackground>
  );
};

export default FollowersChartScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
});
