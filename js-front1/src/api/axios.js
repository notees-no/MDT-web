import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция для проверки истечения срока действия токена
const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = jwtDecode(token);
  return decodedToken.exp * 1000 < Date.now(); // Сравниваем с текущим временем
};

// Перехватчик запроса для добавления токена в заголовки
instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('token');

    // Проверка истечения срока действия токена
    if (isTokenExpired(token)) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await axios.post('/refresh-token', refreshToken, {
            headers: {
              'Authorization': `Bearer ${refreshToken}`
            }
          });
          token = response.data.jwt; // Обновляем токен
          localStorage.setItem('token', token); // Обновляем токен в localStorage
        } catch (error) {
          // Если не удалось обновить токен, удалите его и перенаправьте на вход
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; // Или используйте history.push('/login')
        }
      } else {
        // Удалите токен и перенаправьте на вход
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }

    // Устанавливаем токен в заголовки
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