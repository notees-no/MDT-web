import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Typography } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'blue',
          color: 'white',
        },
      },
    },
  },
});

export default function ThemLogin({ username, password, setUsername, setPassword, handleSubmit }) {
  return (
    <ThemeProvider theme={theme}>
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
}