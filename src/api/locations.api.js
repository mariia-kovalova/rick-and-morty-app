import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const locations = {
  getLocationById: async id => {
    const { data } = await axios.get(`/location/${id}`);

    return data;
  },
  getLocationByFilter: async ({ name, dimension }) => {
    const { data } = await axios.get(`/location`, {
      params: { name, dimension },
    });

    return data;
  },
};
