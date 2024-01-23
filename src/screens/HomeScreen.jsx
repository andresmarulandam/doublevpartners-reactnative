import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>
        Bienvenido a la Aplicación GitHub Users
      </Text>
      <Text>
        Esta aplicación te permite buscar usuarios de GitHub y ver información
        detallada sobre ellos.
      </Text>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>
        Para realizar una búsqueda, simplemente ingresa el nombre de usuario en
        la pantalla de búsqueda.
      </Text>
      <Text>Asegúrate de cumplir con las siguientes validaciones:</Text>
      <Text>- El texto de búsqueda debe tener al menos 4 caracteres.</Text>
      <Text>- No se permite buscar la palabra "doublevpartners".</Text>
      <Button title="Ir a la Búsqueda" onPress={navigateToSearch} />
    </View>
  );
};

export default HomeScreen;
