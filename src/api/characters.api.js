import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const characters = {
  getCharacters: async page => {
    const data = await axios.get('/character', {
      params: {
        page,
      },
    });
    console.log(data);

    return data;
  },
  getCharacterById: async id => {
    const { data } = await axios.get(`/character/${id}`);

    return data;
  },
  getCharactersByFilter: async ({ name, status, species, gender }) => {
    const { data } = await axios.get(`/character`, {
      params: { name, status, species, gender },
    });

    return data;
  },
};
