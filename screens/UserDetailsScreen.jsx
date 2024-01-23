import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Text, View } from 'react-native';

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
    <View>
      {userDetails ? (
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: userDetails.avatar_url }}
          />
          <Text>{`Username: ${userDetails.login}`}</Text>
          <Text>{`ID: ${userDetails.id}`}</Text>
        </View>
      ) : (
        <Text>Cargando detalles del usuario...</Text>
      )}
    </View>
  );
};

export default UserDetailsScreen;
