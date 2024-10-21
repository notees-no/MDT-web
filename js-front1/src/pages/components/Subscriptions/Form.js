import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import formTheme from './formTheme';

const Form = ({ handleSubmit, inSubscription }) => {
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

  // Box используем как контейнер формы
  return (
    <ThemeProvider theme={formTheme}>
      <Box component="form" onSubmit={onSubmit} sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, // Стили для всех TextField
        padding: '24px',
        backgroundColor: '#f7f7f8',
        borderRadius: '8px',
      }}>
        <TextField
          label="Название"
          name="name"
          value={subscription.name}
          onChange={handleChange}
        />
        <TextField
          label="Категоря"
          name="category"
          value={subscription.category}
          onChange={handleChange}
        />
        <TextField
          label="Подписчики"
          name="followers"
          type="number"
          value={subscription.followers}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Отслеживать</Button>
      </Box>
    </ThemeProvider>
  );
};

export default Form;