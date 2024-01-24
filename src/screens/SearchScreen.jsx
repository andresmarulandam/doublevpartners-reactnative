import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import { searchUsers, getUserDetails } from '../services/api';
import StartButton from '../components/StartButton';

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);

  useEffect(() => {
    getTenUsers();
  }, []);

  const isValidSearch = () => {
    const trimmedSearchText = search.trim().toLowerCase();

    if (trimmedSearchText.length < 4) {
      alert('Ingrese al menos 4 caracteres para buscar');
      return false;
    }
    if (trimmedSearchText === 'doublevpartners') {
      alert(
        'NO se permite realizar la búsqueda de la palabra "doublevpartners"',
      );
      return false;
    }
    return true;
  };

  const getTenUsers = async () => {
    try {
      if (isValidSearch()) {
        const usersData = await searchUsers(search);
        const userFollowers = await Promise.all(
          usersData.slice(0, 10).map(async (user) => {
            const userDetails = await getUserDetails(user.login);
            const { login, id, followers } = userDetails;

            return {
              login,
              id,
              followers,
            };
          }),
        );

        setUsers(userFollowers);
        setUsersLoaded(true);
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const handleSearch = () => {
    getTenUsers();
  };
  const navigateToFollowersChart = () => {
    navigation.navigate('FollowersChart', { users });
  };

  return (
    <ImageBackground
      source={require('../assets/pexels4.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.view}>
          <TextInput
            placeholder="Ingresa el nombre de un usuario"
            value={search}
            onChangeText={setSearch}
            style={styles.textInput}
          />
          <StartButton
            title="Buscar"
            onPress={handleSearch}
            style={styles.button}
          />
        </View>

        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', { username: item.login })
              }
            >
              <View style={styles.userItemContainer}>
                <Text
                  style={styles.usernameText}
                >{`Username: ${item.login}`}</Text>
                <Text style={styles.idText}>{`ID: ${item.id}`}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {usersLoaded && (
          <StartButton
            title="Ver gráfico de seguidores"
            onPress={navigateToFollowersChart}
            style={styles.button}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    marginTop: 70,
  },
  view: {
    alignItems: 'center',
    paddingTop: 20,
  },
  textInput: {
    width: '95%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(213, 219, 219, 0.2)',
    color: 'white',
  },
  button: {
    margin: 50,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  userItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: 'rgba(213, 219, 219, 0.1)',
    borderRadius: 10,
    elevation: 3,
  },
  usernameText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: 'white',
  },
  idText: {
    fontSize: 14,
    color: 'white',
  },
});
