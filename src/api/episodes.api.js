import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const episodes = {
  getEpisodeById: async id => {
    const { data } = await axios.get(`/episode/${id}`);

    return data;
  },
  getEpisodeByFilter: async ({ name, episode }) => {
    const { data } = await axios.get(`/episode`, {
      params: { name, episode },
    });

    return data;
  },
};
