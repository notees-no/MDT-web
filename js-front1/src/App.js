import React from 'react';
import Router from './Router';
import TwitchAPI from "./api/service";
import ThemeChangeButton from './ThemeChangeButton';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

const initialSubscriptions = TwitchAPI.all();

function App() {
  const [subscriptions, setSubscriptions] = React.useState(initialSubscriptions);
  const [authenticatedUser, setAuthenticatedUser] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const delSubscription = (id) => {
    if (TwitchAPI.delete(id)) {
      setSubscriptions(subscriptions.filter((subscription) => subscription.id !== id));
    }
  };

  const addSubscription = (subscription) => {
    const newSubscription = TwitchAPI.add(subscription);
    if (newSubscription) {
      setSubscriptions([...subscriptions, newSubscription]);
    }
  };

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <ThemeChangeButton isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Router
          authenticatedUser={authenticatedUser}
          addSubscription={addSubscription}
          subscriptions={subscriptions}
          delSubscription={delSubscription}
          isDarkTheme={isDarkTheme}
          setAuthenticatedUser={setAuthenticatedUser}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;