import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTenUsers();
  }, []);

  const getTenUsers = async () => {
    try {
      if (isValidSearch()) {
        const response = await axios.get(
          'https://api.github.com/search/users',
          {
            params: {
              q: search,
            },
          },
        );
        const userFollowers = await Promise.all(
          response.data.items.slice(0, 10).map(async (user) => {
            const userDetailsResponse = await axios.get(
              `https://api.github.com/users/${user.login}`,
            );
            const { login, id, followers } = userDetailsResponse.data;

            return {
              login,
              id,
              followers,
            };
          }),
        );

        setUsers(userFollowers);
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

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

  const handleSearch = () => {
    getTenUsers();
  };

  return (
    <View>
      <TextInput
        placeholder="Ingresa el nombre de un usuario"
        value={search}
        onChangeText={setSearch}
      />
      <Button title="Buscar" onPress={handleSearch} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', { username: item.login })
            }
          >
            <View style={styles.view}>
              <Text>{`Username: ${item.login}`}</Text>
              <Text>{`ID: ${item.id}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {users.length > 0 && <Chart data={users} />}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
