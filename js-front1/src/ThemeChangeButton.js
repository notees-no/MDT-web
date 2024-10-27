import React from 'react';
import { Button } from '@mui/material';

const ThemeChangeButton = ({ isDarkTheme, changeTheme }) => {
  return (
    <Button onClick={changeTheme} variant="contained" sx={{ position: 'absolute', top: 20, right: 20 }}>
      {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
    </Button>
  );
};

export default ThemeChangeButton;