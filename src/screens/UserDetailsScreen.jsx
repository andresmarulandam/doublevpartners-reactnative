import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const { username } = route.params;
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error al obtener detalles del usuario:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/pexels2.jpg')}
      style={styles.backgroundImage}
    >
      {userDetails ? (
        <View style={styles.mainView}>
          <Text style={styles.title}>Detalles del usuario seleccionado</Text>
          <Image
            style={styles.image}
            source={{ uri: userDetails.avatar_url }}
          />
          <Text style={styles.text}>{`Username: ${userDetails.login}`}</Text>
          <Text style={styles.text}>{`ID: ${userDetails.id}`}</Text>
        </View>
      ) : (
        <Text>Cargando detalles del usuario...</Text>
      )}
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
    marginTop: 100,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginBottom: 60,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default UserDetailsScreen;
