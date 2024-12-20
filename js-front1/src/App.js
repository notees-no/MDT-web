import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import Navbar from './pages/Navbar/Navbar';

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const changeTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeProps = { isDarkTheme, toggleTheme: changeTheme };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar {...themeProps} />
        <Router {...themeProps} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;