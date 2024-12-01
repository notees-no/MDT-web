import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = jwtDecode(token);
  return decodedToken.exp * 1000 < Date.now();
};

instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('token');

    if (isTokenExpired(token)) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await axios.post('/refresh-token', refreshToken, {
            headers: {
              'Authorization': `Bearer ${refreshToken}`
            }
          });
          token = response.data.jwt; 
          localStorage.setItem('token', token); 
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; 
        }
      } else {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;