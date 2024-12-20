import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthError } from '../../../redux/slices/authSlice';

const Login = ({ isDarkTheme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const resultAction = await dispatch(login({ username, password }));
    if (login.fulfilled.match(resultAction)) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/main" />;
  }

  const renderTextField = (label, value, onChange, type = 'text') => (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      error={!!error}
      helperText={error ? "Неверное имя пользователя или пароль" : ""}
      fullWidth
    />
  );

  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: (theme) => theme.palette.background.default }}>
      <Box sx={{ width: '300px', padding: '20px', backgroundColor: (theme) => theme.palette.background.paper, borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Вход
        </Typography>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            {renderTextField("Имя пользователя", username, (event) => setUsername(event.target.value))}
          </div>
          <div style={{ marginBottom: '20px' }}>
            {renderTextField("Пароль", password, (event) => setPassword(event.target.value), 'password')}
          </div>
          <Button type="submit" variant="contained" fullWidth>Войти</Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;