import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme';

const Form = ({ handleSubmit, inSubscription, isDarkTheme }) => {
  const [subscription, setSubscription] = React.useState(inSubscription);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubscription({ ...subscription, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(subscription);
    setSubscription(inSubscription);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box component="form" onSubmit={onSubmit} sx={{
        padding: '24px', display: 'flex', flexDirection: 'row',
        backgroundColor: isDarkTheme ? 'background.paper' : 'background.default',
      }}>
        <TextField
          label="Название"
          name="name"
          value={subscription.name}
          onChange={handleChange}
          sx={{ marginRight: '16px', flex: '1 1 auto', minWidth: '150px', maxWidth: '150px', }}
        />
        <TextField
          label="Категория"
          name="category"
          value={subscription.category}
          onChange={handleChange}
          sx={{ marginRight: '16px', flex: '1 1 auto', minWidth: '150px', maxWidth: '150px', }}
        />
        <TextField
          label="Подписчики"
          name="followers"
          type="number"
          value={subscription.followers}
          onChange={handleChange}
          sx={{ marginRight: '16px', flex: '1 1 auto', minWidth: '150px', maxWidth: '150px', }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, minWidth: '200px', maxWidth: '200px', }}>Отслеживать</Button>
      </Box>
    </ThemeProvider>
  );
};

export default Form;