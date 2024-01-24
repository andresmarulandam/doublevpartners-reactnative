import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StartButton from '../components/StartButton';

const HomeScreen = ({ navigation }) => {
  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <ImageBackground
      source={require('../assets/pexels.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            Bienvenido a la Aplicación GitHub Users
          </Text>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>
            Esta aplicación te permite buscar usuarios de GitHub y ver
            información detallada sobre ellos.
          </Text>
        </View>

        <StartButton title="Comenzar" onPress={navigateToSearch} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },

  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleView: {
    marginTop: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  descriptionView: {
    marginTop: 200,
    marginBottom: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    fontWeight: '500',
  },
  descriptionText: {
    color: '#3498db',
    fontSize: 28,
    textAlign: 'center',
  },
});
export default HomeScreen;
