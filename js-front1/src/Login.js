import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ThemLogin from './ThemLogin';

const users = [
  { id: 1, username: 'user', password: '123' },
  { id: 2, username: 'admin', password: '123' },
];

export default function Login({ setAuthenticatedUser  }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundUser  = users.find((user) => user.username === username && user.password === password);
    if (foundUser ) {
      setAuthenticatedUser (foundUser );
      setAuthenticated(true);
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  };

  if (authenticated) {
    return <Navigate to="/main" />;
  }

  return (
    <ThemLogin
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}