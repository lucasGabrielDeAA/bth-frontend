import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
});

api.interceptors.request.use(
  async config => {
    const token = await localStorage.getItem('auth_token');

    if (token !== null) {
      config.headers.Authorization = token;
    }

    return config;
  },
  error => Promise.reject(error)
);


export default api;