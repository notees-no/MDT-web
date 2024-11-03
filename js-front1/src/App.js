import React from 'react';
import Router from './Router';
import ThemeChangeButton from './ThemeChangeButton';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [authenticatedUser, setAuthenticatedUser] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <ThemeChangeButton isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Router
          authenticatedUser={authenticatedUser}
          isDarkTheme={isDarkTheme}
          setAuthenticatedUser={setAuthenticatedUser}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;