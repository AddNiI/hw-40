import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6997e369d66520f95f15f0f9.mockapi.io',
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};
