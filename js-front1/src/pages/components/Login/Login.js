import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Typography, Box } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../redux/selectors/userSelectors';

const Login = ({ setAuthenticatedUser, isDarkTheme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector(selectUsers);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setAuthenticatedUser(user);
      setRedirect(true);
    } else {
      setError(true);
    }
  };

  if (redirect) {
    return <Navigate to="/main" />;
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: (theme) => theme.palette.background.default }}>
        < Box sx={{ width: '300px', padding: '20px', backgroundColor: (theme) => theme.palette.background.paper, borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Вход
          </Typography>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Имя пользователя"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                error={error}
                helperText={error ? "Неверное имя пользователя или пароль" : ""}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Пароль"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={error}
                helperText={error ? "Неверное имя пользователя или пароль" : ""}
              />
            </div>
            <Button type="submit">Войти</Button>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;