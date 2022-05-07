import axios from 'axios';

const basicAxios = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { basicAxios as request };
