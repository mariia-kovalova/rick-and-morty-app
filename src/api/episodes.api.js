import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const episodes = {
  getEpisodes: async page => {
    const { data } = await axios.get('/episode', {
      params: {
        page,
      },
    });

    return data;
  },
  getEpisodeById: async id => {
    const { data } = await axios.get(`/episode/${id}`);

    return data;
  },
  getEpisodesByFilter: async ({ name, episode }) => {
    const { data } = await axios.get(`/episode`, {
      params: { name, episode },
    });

    return data;
  },
};
