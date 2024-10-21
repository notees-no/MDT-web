import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Typography } from '@mui/material';
import loginTheme from './loginTheme';

const users = [
  { id: 1, username: 'user', password: '123' },
  { id: 2, username: 'admin', password: '123' },
  { id: 3, username: '1',  password: '1' },
];

const Login = ({ setAuthenticatedUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundUser = users.find((user) => user.username === username && user.password === password);
    if (foundUser) {
      setAuthenticatedUser(foundUser);
      setAuthenticated(true);
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  };

  if (authenticated) {
    return <Navigate to="/main" />;
  }

  return (
    <ThemeProvider theme={loginTheme}>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Вход
          </Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Имя пользователя"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Пароль"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button type="submit">Войти</Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;