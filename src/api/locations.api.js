import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const locations = {
  getLocations: async page => {
    const { data } = await axios.get('/location', {
      params: {
        page,
      },
    });

    return data;
  },
  getLocationById: async id => {
    const { data } = await axios.get(`/location/${id}`);

    return data;
  },
  getLocationsByFilter: async ({ name, dimension }) => {
    const { data } = await axios.get(`/location`, {
      params: { name, dimension },
    });

    return data;
  },
};
