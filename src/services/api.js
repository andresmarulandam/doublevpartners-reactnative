import axios from 'axios';

export const searchUsers = async (searchText) => {
  try {
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
        q: searchText,
      },
    });
    return response.data.items;
  } catch (error) {
    throw new Error(`Error al obtener usuarios: ${error.message}`);
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener detalles del usuario: ${error.message}`);
  }
};
