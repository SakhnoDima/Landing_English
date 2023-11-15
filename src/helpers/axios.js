import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://landing-english.onrender.com/api',
});
