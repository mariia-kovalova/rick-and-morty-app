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
  getLocationsByIds: async ids => {
    const { data } = await axios.get(`/location/${ids}`);

    return data;
  },
  getLocationById: async id => {
    const { data } = await axios.get(`/location/${id}`);

    return data;
  },
  getLocationsByFilter: async ({ name, type, dimension }) => {
    const { data } = await axios.get(`/location`, {
      params: { name, type, dimension },
    });

    return data;
  },
};
