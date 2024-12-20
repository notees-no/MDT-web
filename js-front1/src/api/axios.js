import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция для проверки действительности токена
const isTokenValid = (token) => {
  const payload = JSON.parse(atob(token.split('.')[1]));
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp > currentTime;
};

// Функция для обновления токена
const refreshToken = async (userId, oldToken) => {
  try {
    const response = await axiosInstance.post('/auth/refresh-token', { token: oldToken, userId });
    return response.data.token;
  } catch (error) {
    console.error('Ошибка обновления токена:', error);
    return null;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem(`jwt_token_${userId}`);

    if (token) {
      if (!isTokenValid(token)) {
        // Если токен недействителен, обновляем его
        const newToken = await refreshToken(userId, token);
        if (newToken) {
          localStorage.setItem(`jwt_token_${userId}`, newToken);
          config.headers['Authorization'] = `Bearer ${newToken}`;
        } else {
          localStorage.removeItem(`jwt_token_${userId}`);
          window.location.href = '/login';
        }
      } else {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Обработчик ошибок для ответов от сервера
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const userId = localStorage.getItem('user_id');
      localStorage.removeItem(`jwt_token_${userId}`);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;