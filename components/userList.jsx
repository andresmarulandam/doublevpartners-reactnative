import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const userList = ({ users, navigation }) => {
  const handleClick = (username) => {
    navigation.navigate('UserDetails', { username });
  };
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleClick(item.login)}>
            <Text>{`Username:${item.login},ID:${item.id}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default userList;

const styles = StyleSheet.create({});
